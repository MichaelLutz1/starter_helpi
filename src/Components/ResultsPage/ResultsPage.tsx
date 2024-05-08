import React, { useEffect } from 'react';
import OpenAI from "openai";
import './ResultsPage.css'
import { Button } from 'react-bootstrap';
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation'

interface QuestionData {
  question: string;
  answer: string;
}

export function ResultsPage({ APIKey, basicQuestionData, detailQuestionData, setPage }: { APIKey: string, basicQuestionData: QuestionData[], detailQuestionData: QuestionData[], setPage: (newPage: string) => void }) {
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responseContent = await main();
      setContent(JSON.stringify(responseContent));
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

    prompt += QuestionData.map((questionData, index) => {
      return `Question ${index + 1}: ${QuestionData[index].question}\nAnswer: ${QuestionData[index].answer}`;
    }).join('\n\n');

    prompt += `\n\nReturn me the 3 most ideal career choices, 2 reasons why for each, and a few steps they can take to reach their highest matched career`;

    return prompt;
  }

  async function main() {
    try {
      const completion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a career selection assistant. Help the user find the best job based on their preferences and skills."
          },
          {
            role: "user",
            content: pickPrompt(basicQuestionData, detailQuestionData)
          }
        ],
        model: "gpt-4-turbo",
      });

      console.log(completion.choices[0].message.content);
    }
    catch (error) {
      setError(true);
    }

    async function main() {
      const completion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a career selection assistant. Help the user find the best job based on their preferences and skills."
          },
          {
            role: "user",
            content: pickPrompt(basicQuestionData, detailQuestionData)
          }
        ],
        model: "gpt-4-turbo",
      });

      console.log(completion.choices[0].message.content);
      return completion.choices[0].message.content;
    }


    return (
      <div className="resultsContainer">
        <div>
          {error ? <div>
            <h1>There was an error processing your response. Try resubmitting your api key</h1>
            <Button onClick={() => setPage('Home')}>Return to Home</Button>

          </div> :
            <>
              <h1>ResultsPage</h1>
              <div> {loading && <LoadingAnimation />} </div>
              <p> {!(loading) && content} </p>
            </>
          }
        </div>
      </div>
    )
  }
}
