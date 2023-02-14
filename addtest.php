<?php
    require_once 'src/auth_session.php';
?>

<!DOCTYPE html>
<html>
<head>
    <meta chareset="utf-8"/>
    <title>AddTest</title>
    <script defer src="scripts/sendRequestUtility.js"></script>
    <script defer src="scripts/logout.js"></script>
    <link rel="stylesheet" href="styles/index.css"/>
</head>
<body>
    <header>
        <ul>
          <li><button id="logout">Logout</button></li>
          <li><a href="index.php">Home</a></li>
          <li><a class="active" href="addtest.php">Import Questions</a></li>
          <li><a href="#contact">Export Questions</a></li>
          <li><a href="show_questions.php">Manage questions</a></li>
          <li><a href="test_menu.php">Test menu</a></li>
        </ul> 
    </header>

<h1>Adding a CSV Test:</h1>
    <form action="src/add_test.php" method="POST" enctype="multipart/form-data">
        <!--our custom file upload button-->   
        <input id="actual-btn" type="file" name="filename"  hidden/>
        <label for="actual-btn" class="specialbutton" >Choose File</label>
        <!-- <input id="actual-btn" type="file" name="filename"  /> -->
        <input class="specialbutton" type="submit" value="Upload" />
    </form>

</body>
</html>