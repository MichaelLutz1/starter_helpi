import React, { useEffect } from 'react';
import OpenAI from "openai";
import './ResultsPage.css'
import { Button } from 'react-bootstrap';
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation'

interface QuestionData {
  question: string;
  answer: string;
}
interface Careers {
  career: string;
  reasons: string[];
  steps: string[];
}

export function ResultsPage({ APIKey, basicQuestionData, detailQuestionData, setPage }: { APIKey: string, basicQuestionData: QuestionData[], detailQuestionData: QuestionData[], setPage: (page: string) => void }) {
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState<Careers[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responseContent = await main() ?? '';
      if (responseContent === '') {
        setError(true);
        return;
      }
      const responseCareers = JSON.parse(responseContent);
      setContent(responseCareers.careers);
      setLoading(false)
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const client = new OpenAI({
    apiKey: APIKey,
    dangerouslyAllowBrowser: true
  })

  const pickPrompt = (basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]): string => {
    if (detailQuestionData[0].answer === '') {
      return createPrompt(basicQuestionData);
    }
    else {
      return createPrompt(detailQuestionData);
    }
  }

  const createPrompt = (QuestionData: QuestionData[]): string => {
    let prompt: string = `Given the following questions and answers:\n\n`;
    const jsonSchema = {
      career: "string",
      reasons: "Array of strings",
      steps: "Array of strings",
    }

    prompt += QuestionData.map((questionData, index) => {
      return `Question ${index + 1}: ${QuestionData[index].question}\nAnswer: ${QuestionData[index].answer}`;
    }).join('\n\n');

    prompt += `\n\nReturn me the 3 most ideal career choices, 2 reasons why for each, and a few steps they can take to reach their highest matched career`;

    prompt += `\n\nThe JSON should be an array of objects called "careers" with this format:\n${JSON.stringify(jsonSchema, null, 2)}`;
    console.log(prompt);

    return prompt;
  }

  async function main() {
    try {
      const completion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a career selection assistant. Help the user find the best job based on their preferences and skills. Return the results in a JSON object."
          },
          {
            role: "user",
            content: pickPrompt(basicQuestionData, detailQuestionData)
          }
        ],
        model: "gpt-4-turbo",
        response_format: { type: "json_object" },
      })
      return completion.choices[0].message.content;
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="resultsContainer">
      <div> {loading ? <LoadingAnimation /> : content === null || error ? <div>
        <h1>Sorry, no results found.</h1>
        <p>Please try again with different answers.</p>
        <Button onClick={() => setPage('Home')} style={{backgroundColor: 'var(--purple)', borderColor: 'var(--purple)'}}>Return to Home</Button>
      </div> :
        content.map((choice, index) => (
          <div key={index}>
            <h2>{choice.career}</h2>
            <h3>Reasons:</h3>
            <ul>
              {choice.reasons.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
            <h3>Steps to Reach:</h3>
            <ul>
              {choice.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        ))
      } </div>
    </div>
  )
}
