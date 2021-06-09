const scrollToComponent = (component) => {
  const componentName = document.getElementById(component);
  componentName.scrollIntoView({ behavior: "smooth" });
};

export default scrollToComponent;
