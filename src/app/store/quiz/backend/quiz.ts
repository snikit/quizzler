import { Quiz } from 'src/app/data/model/quiz.model';

export const data: Quiz = {
  id: 0,
  title: 'MCT Quiz',
  subtitle: 'Level 1',
  timer: 30,
  details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
  consequuntur error repudiandae numquam deserunt quisquam repellat libero
  asperiores earum nam nobis, culpa ratione quam perferendis esse,
  cupiditate neque quas!`,
  instruction: {
    title: 'THINGS TO REMEMBER',
    content: `<ul>
    <li>
      Before starting test close all chat windows, screen shot etc and make
      sure you have a stable internet connection
    </li>
    <li>
      Pressing F5 during the test will close your test and you will not be
      able to enter again
    </li>
    <li>
      If you computer shuts down you will able to continue again from the
      place you left
    </li>
    <li>Your test will open in a new window</li>
    <li>When resuming, please start your test as you did earlier</li>
  </ul>`,
  },

  sections: [
    {
      title: 'Session 1',
      timer: 10,
      noOfQuestions: 10,
      type: 'mcq',
    },
    {
      title: 'Session 2',
      timer: 20,
      noOfQuestions: 20,
      type: 'mcq',
    },
    {
      title: 'Session 3',
      timer: 10,
      noOfQuestions: 10,
      type: 'mcq',
    },
  ],

  questions: [
    {
      id: 1,
      text: 'Quis sit dolor tempor fugiat fugiat culpa qui?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 2,
      text: 'Culpa ad Lorem nostrud labore officia irure ea aute?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 3,
      text: 'Aliquip elit in nostrud cupidatat?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 4,
      text: 'Sint reprehenderit aute aliquip excepteur?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 5,
      text: 'Deserunt esse nisi do est in excepteur tempor?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 6,
      text: 'Eu ipsum fugiat enim laboris magna velit cillum aliqua?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 7,
      text: 'Amet deserunt velit incididunt velit?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
    {
      id: 8,
      text: 'Nisi consectetur qui nostrud aute quis irure in?',
      answers: [
        {
          Index: 0,
          text: 'Correct',
        },
        {
          Index: 1,
          text: 'Incorrect',
        },
        {
          Index: 2,
          text: 'Incorrect',
        },
        {
          Index: 3,
          text: 'Incorrect',
        },
      ],
    },
  ],
};
