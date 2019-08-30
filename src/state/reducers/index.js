import {combineReducers} from 'redux'
import authentication from 'state/reducers/auth'
import microComments from 'state/reducers/micro-comment'

const mainState = (state,action) => {
    return {
        ...state,
        message: "HEY WORKING",
        title: "Muut - Micro Commenting Demo",
        contents: [
            "test-thread",
            "When Muut first launched in 2013 our goal was to revolutionize online discussion with a new kind of platform. Over the years we've built a next-gen platform powered by an API that offered speed and flexibility. Each advancement drew more and more interest from our audience on how they could better utilize our platform to accomplish more and more ambitious projects.",
            "And so, we've spent the last couple years making Muut even better behind the scenes with an advanced API. Muut IO was the start of that process, giving developers the speed and power of Muut with the flexibility of an API. But it was just the beginning. Thanks to the feedback we got, we were able to find the sweet spot.",
            "The new Muut is the culmination of a long journey we started all those years ago. We've rebuilt our API from the ground up to bring you our new developer platform.",
            "Typically, when you're looking to add a social element to your app you've got two choices: an off-the-shelf or turnkey product, like our new [Muut personal plans](https://muut.com/pricing-getmuut), or building your own system from scratch. They each have their drawbacks, though. A turnkey product gets you up and running fast, but it lacks a certain flexibility. Building from scratch can be a great way to get all the features you need or want, but it can take a long time and the cost can inflate to well beyond your initial budget.",
            "The new Muut finally brings you the best of both worlds. Get up and running fast, and tailor it to your needs with our powerful API while spending significantly less money building out basic features because we've done all the heavy lifting. Metadata along with sorting/filtering gives you the freedom to manage your content like never before.",
            "You can also manage your projects in our new admin console, and keep an eye out for our upcoming in-console moderation features. We'll be incorporating machine learning, sentiment analysis, content management, and all right inside the console (as well as our new API).",
            "The future is bright, we're giving you to tools to build it. We're looking forward to seeing what you create with Muut!"
        ]
    }
}

const reducers = combineReducers({
    init: mainState,
    auth: authentication,
    thread: microComments
})

export default reducers