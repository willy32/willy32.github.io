<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <p>Hello World!</p>
    <form id="frmAddUser">
      <input name="txtAddUsername" type="text" placeholder="Username">
      <input name="txtAddEmail" type="email" placeholder="E-Mail">
      <input name="txtAddPassword" type="password" placeholder="Password">
      <button type="submit">Add User</button>
    </form>
    <main>
    <?php

    include("connect.php");

    $stmt = $db->query("SELECT * FROM users");
    $results = $stmt->fetchAll();

    foreach($results as $row){
      echo("
      <div class='container' id=\"a" . $row["id"] . "\">" . 
        "<p>" . $row["username"] . "</p>" . 
        "<p>" . $row["email"] . "</p>" . 
        "<button type='submit' onclick='remove(" . $row["id"] . ");'>" . "Delete</button>" .
        "<button type='submit' onclick='edit(" . $row["id"] . ");'>" . "Edit</button>" .
      "</div>"
      );
    }

    ?>
    </main>

    <script src="./app.js"></script>
  </body>
</html>
