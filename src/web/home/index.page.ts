enum Status {
  pass = "Pass",
  fail = "Fail",
}

export default `
<html>

<head>
<style>
.loader {
  --size: 2rem;
  --thickness: 3px;
  --color: var(--primary);
  
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  border-style: solid;
  border-color: var(--color);
  border-top-color: transparent;
  border-width: var(--thickness);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
</head>

<body>
  <div>
    <p>Home page</p>

    <p>{{name}}: ${Status.pass}</p>
    
    <div className="loader" />

    <button>Click me</button>
  </div>

  <script type="module" src="./index.script.js"></script>
</body>

</html>
`;
