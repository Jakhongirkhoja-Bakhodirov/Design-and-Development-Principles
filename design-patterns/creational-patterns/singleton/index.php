<?php

final class President
{
    private static $instance;

    private function __construct()
    {
    }

    public static function getInstance(): President
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __clone()
    {
        //Disable clonning
    }

    public function __wakeup()
    {
        //Disable unserialize
    }
}

$president1 = President::getInstance();
$president2 = President::getInstance();

var_dump($president1 === $president2); // true

var_dump($president1);
