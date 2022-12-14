<?php

echo ('
<head>
        <title>my blog</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/CSS/styles.css">
      
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        </head>
    <body>
        <header> 

            <nav>
                <div><a class="link" href="http://localhost/dashboard/index.php#Work">Work</a></div> 
                <div><a class="link" href="http://localhost/dashboard/index.php#About">About</a></div>
                <div><a class="link" href="http://localhost/dashboard/index.php#Blog">Blog</a></div>
                <div><a class="link" href="http://localhost/dashboard/index.php#Services">Services</a></div>
                <div><a class="link" href="http://localhost/dashboard/index.php#Contact">Contact</a></div>
            </nav>
        </header>
        <main class="my-blog"> 
            <div class="articles">');

$dbConnect = mysqli_connect("localhost", "root", "","altshu_final_project");
mysqli_query($dbConnect, "SET NAMES 'utf8'");

$querySelectAll = "SELECT * FROM news";
$result = mysqli_query($dbConnect, $querySelectAll);

            while ($news = mysqli_fetch_array($result)) {
                echo ('
                <div class="article"> 
                    <div class="picture">
                        <img class="picture1" src="'. $news['image_url'] .'" alt="first-project">
                    </div>
                    <div class="story">     
                        <p class="date">'. $news['created_at'] .'</p> 
                        <p class="news_title"><a href="/dashboard/newspage.php?id=' . $news['id'] . '">' . $news['title'] . '</a></p> 
                        <p class="news_text">'. $news['text'] .'</p>                     
                    </div>
                    ');

            }

echo ('
            </div>
        </main>
    </body>    
');
?>