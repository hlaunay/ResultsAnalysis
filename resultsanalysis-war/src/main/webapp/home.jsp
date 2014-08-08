<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="herve.launay@gmail.com">
    <link rel="icon" href="../../favicon.ico">

    <title>Results Analysis</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
        <h1>Result Analysis</h1>

        <form class="form-search" role="form">
        <h2 class="form-search-heading">Athlete</h2>
        <input id="athlete_name" name="athlete_name" type="text" class="form-control" placeholder="Name" required autofocus/>
        <input id="athlete_family" name="athlete_family" type="text" class="form-control" placeholder="Family Name" required/>
        <select id="athlete_category" name="athlete_category"  class="form-control">
          <option>K1h</option>
          <option>K1d</option>
          <option>C1h</option>
          <option>C1d</option>
          <option>C2</option>
        </select>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Analyse</button>
        </form>

    </div> <!-- /container -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <!-- Latest compiled and minified JavaScript -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  </body>
</html>