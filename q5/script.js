ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  ask(
    "Do you agree?",
    () => alert("you agree."),
    () => alert("you canceled the execution.")
  );