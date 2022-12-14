<?php

class Developer {

private $name;
private $lastName;
private $age;
private $place; 
private $type; //тип разработчика front/back/full
private $hasProject; //есть ли проект на данный момент
private $head; //может быть руководителем проекта
protected $skills;

public function __construct($name, $lastName, $age, $place, $type, $hasProject, $head) {
    $this->name = $name;
    $this->lastName = $lastName;
    $this->age = $age;
    $this->place = $place;
    $this->type = $type;
    $this->hasProject = $hasProject;
    $this->head =  $head;
    $this->skills =  $skills;
}

public function getName() {
    return  $this->name;
}

public function getlastName() {
    return  $this->lastName;
}

public function getAge() {
    return  $this->age;
}

public function getPlace() {
    return  $this->place;
}

public function getType() {
    return  $this->type;
}

public function gethasProject() {
    return  $this->hasProject;
}

public function getHead() {
    return  $this->head;
}


public function bagFeature() {
    $randBool = (bool) mt_rand(0, 1);
        if ($randBool = 0) {
         return "it a bag";
        } else {
        return "it is a feature";
        } 
    }
}

class Web_developer extends Developer {
    public function () {
        return "knows HTML";
    }
}

class react extends Web_developer {
    public function skills() {
        return "knows react";
    }
}


$firstDeveloper = new Developer('Mike', 'Vazovsky', '32', 'Moscow', 'full stack', 'yes', 'yes');
echo $firstDeveloper->gethasProject(); 
echo "<br>";
echo $firstDeveloper->bagFeature($randBool);
echo "<br>";
$secondDeveloper = new Web_developer('James', 'Sallivan', '32', 'Moscow', 'full stack', 'yes', 'yes');
echo ($secondDeveloper->skills()); 
echo "<br>";
$thirdDeveloper = new React ()





?>