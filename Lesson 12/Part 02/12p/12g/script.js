setInterval(() => {
  if (document.title === 'App') {
    document.title = '(2) New Messages';
  } else {
    document.title = 'App';
  }
}, 1000)

