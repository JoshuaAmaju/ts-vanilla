enum Status {
  pass = "Pass",
  fail = "Fail",
}

export default `
<html>

<body>
  <div>
    <p>Home page</p>

    <p>{{name}}: ${Status.pass}</p>

    <button>Click me</button>
  </div>

  <script type="module" src="./index.script.js"></script>
</body>

</html>
`;
