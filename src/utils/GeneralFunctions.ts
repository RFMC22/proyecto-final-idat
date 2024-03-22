export const TabTitle = (newTitle:string):string => {
  return document.title = newTitle;
}

export const tabScrollClick = (id:string) => {
  const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 300,
      });
    }
}