export const Contact = () => {
  return (
    <section>
      <h1>Let's connect?</h1>
      <div>
        <button onClick={() => window.open("https://github.com/paularynty/")}>
          GitHub
        </button>
        <button
          onClick={() => window.open("https://linkedin.com/in/paularynty/")}
        >
          LinkedIn
        </button>
        <button onClick={() => window.open("mailto:paula.rynty@gmail.com")}>
          Email
        </button>
      </div>
    </section>
  );
};
