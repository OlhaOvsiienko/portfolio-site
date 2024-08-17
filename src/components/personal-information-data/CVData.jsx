import './CVData.styles.css'

const CVData = [
    {
      title: 'Education',
      text: 'This is the long text for block 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      button1: {
        label: 'Button 1',
        onClick: () => alert('Button 1 clicked!'),
      }
    },
    {
      title: 'Experience',
      text: 'This is the long text for block 2. Nulla at velit convallis, congue tellus et, hendrerit quam...',
      button1: {
        label: 'Button 1',
        onClick: () => alert('Button 1 clicked!'),
      },
      button2: {
        label: 'Button 2',
        onClick: () => alert('Button 2 clicked!'),
      }
    },
    {
        title: 'IT Experience',
        text: 'This is the long text for block 2. Nulla at velit convallis, congue tellus et, hendrerit quam...',
        button1: {
          label: 'Button 1',
          onClick: () => alert('Button 1 clicked!'),
        },
        // No button2 in this block
      },
    {
      title: 'IT Skills',
      text: 'This is the long text for block 3. Pellentesque habitant morbi tristique senectus et netus...',
      button1: {
        label: 'Button 1',
        onClick: () => alert('Button 1 clicked!'),
      }
    },
    {
        title: 'General Skills',
        text: 'This is the long text for block 3. Pellentesque habitant morbi tristique senectus et netus...',
        button1: {
          label: 'Button 1',
          onClick: () => alert('Button 1 clicked!'),
        }
      },
  ]

export default CVData