export default function loadLists() {
  return [
    {
      title: 'House', 
      cards: [
        {
          id: 1,
          description: 'Make my bed',
          label: '#93f493'
        },
        {
          id: 2,
          description: 'Clean the dishes',
          label: '#ff9393'
        },
      ]
    },

    {
      title: 'Projects', 
      cards: [
        {
          id: 3, 
          description: 'Make a Pipefy Clone',
          label: '#f0f01f'
        },
        {
          id: 4, 
          description: 'Create an app using the Stripe API',
          label: '#93f493'
        },
      ]
    },

    {
      title: 'Work', 
      cards: [
        {
          id: 5, 
          description: 'Solve a bug',
          label: '#93f493'
        },
        {
          id: 6, 
          description: 'Solve a bug',
          label: '#93f493'
        },
      ]
    },
  ]
}