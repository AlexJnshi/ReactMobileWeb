# About this React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is used for online learning purposes like udemy, it contains 3 sections: home page, login&register page, and static courses page.

>Watch the video demo on [Youtube](https://youtu.be/yJJknFGt14A)

## Home page

The right top corner icon will change depends on your login state, it will show your user name when you login.

In this page, it mainly contain 3 parts: 

### Slides
*There are 4 slides in the banner auto-played. This function is mainly implemented using [bettescroll](https://github.com/ustbhuangyi/better-scroll)*

### Static components 
*Demonstrate course promo information*

### Student works
*Use the Miaov open API (https://data.miaov.com) to obtain data, use axios, redux-thunk middleware to obtain student work data, and implement the slide-up loading more function*

I have attached [API documentation](https://github.com/AlexJnshi/ReactMobileWeb/blob/master/react%20project%20API.txt) in this project

## Login&register page
I was tring to use proxy server to solve CROS issue but got a problem which i think the back-end did not set CROS configuration，so I made some changes, the login and register form will let you log in or register whatever you entered, I just did a basic check for entered info in front-end.

The right top corner button in header will change depends on Browser path, when path equals login it will show back button that will take you back to where you came from based on router history.

### Static courses page
This is the courses timetable with website footer and copyright at the bottom
