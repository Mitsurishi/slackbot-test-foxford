<h1 align="center">


**Slack birthday notification bot**


</h1>


## Description

A bot which does everyday checking of employees birthdays (doing a POST request and receives data in json format) and if it is a someones birthday it sends direct message to employee's manager with reminder.

Example of received data:

![prompt](https://sun9-80.userapi.com/impg/Ci6EIkFYpqiFr65I9TB3YGWqRD4vD77BZUMxXw/kQfXYYdEQ0c.jpg?size=399x646&quality=96&sign=c643152142720a927581baed5ee1e1d7&type=album)

## Stack

NestJs, Slack-API

## Bot creation

To use this script you must create the bot itself in your slack workspace. You can do it by using manifest.json file and pass it when creating an app from manifest:

![prompt](https://sun9-66.userapi.com/impg/17EVlugQoQllnzM5tfovbkurJPeJpD8GhKGsEg/q_5A6k7dsoI.jpg?size=516x366&quality=96&sign=d5c77c75358f97724f165109bb47bee3&type=album)

## Installation

```bash
npm install
```
Before running the app you must specify your .env file. Add a SLACK_BOT_TOKEN variable to your .env file, the value could be found as on picture below after adding a bot to your workspace:

![prompt](https://sun2-4.userapi.com/impg/KmdDWxMQuM73gMNWHPefEvtuObcqE87rrpyRjA/U29B1m4wMMI.jpg?size=984x360&quality=96&sign=0e9dbd75f95192961cf3c95c888aa249&type=album)

## Running the app

```bash
npm start
```