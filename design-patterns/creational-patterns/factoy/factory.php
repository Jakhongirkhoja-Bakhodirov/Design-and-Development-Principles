<?php

interface Interviewer
{
    public function askQuestions();
    public function getQuestions();
}
class Developer implements Interviewer
{
    public function askQuestions()
    {
        echo 'Asking about design patterns!';
    }

    public function getQuestions()
    {
        echo 'Getting about Business Management!';
    }
}

class Manager implements Interviewer
{
    public function askQuestions()
    {
        echo 'Asking about Business Management!';
    }

    public function getQuestions()
    {
        echo 'Getting about Business Management!';
    }
}

abstract class HiringManager
{
    //Factory method
    abstract protected function makeInterview(): Interviewer;
    public function takeInterview()
    {
        $interviewer = $this->makeInterview();
        $interviewer->askQuestions();
        $interviewer->getQuestions();
    }
}

class DevelopmentManager extends HiringManager
{
    protected function makeInterview(): Interviewer
    {
        return new Developer();
    }
}

class MarketingManager extends HiringManager
{
    protected function makeInterview(): Interviewer
    {
        return new Manager();
    }
}


$devManager = new DevelopmentManager();

$devManager->takeInterview();

echo "\n";

$marketingManager = new MarketingManager();

$marketingManager->takeInterview();
