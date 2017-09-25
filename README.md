# Epicodus Path Suggester

## https://arringtonm.github.io/path-suggester/

#### Created by Michael Arrington

This webpage is a tool built to assist potential students of Epicodus with the task of picking which curriculum path is their best fit. Users answer questions about their preferences relating to software design and philosophy towards technology and associated workplaces and are presented with a simple analysis and advice on how to move forward. It was created on September 15, 2017.

### Installation Instructions

To install, download from https://github.com/arringtonm/path-suggester.gitp or open up your favorite shell program and type in the following instructions:

`git clone https://github.com/arringtonm/path-suggester.git`

Please note that this project depends on JQuery and Bootstrap files which are linked externally and **proper functionality of this tool requires an active internet connection**. Upon successful installation, source codes can be viewed with the text editor of your choice.

### Code Description

This website/tool uses a series of questions to pick the best fit of coding school paths for the user. Each answer is weighed and evaluated to to modify an internal score for each Epicodus path. For instance:

```
if (question3 === 1) {
  scoreCsharp++;
} else if (question3 === 2) {
  scoreRuby++;
}
```

In the above example, `question3` is the answer to value coming from a radio button form, where answer value 1 was a preference for a more established company (where C#/.Net is more likely to be found), and value 2 was a preference for startups, where Ruby/Rails is more popular. The `scoreCsharp++` and `scoreRuby++` would increase each score, accordingly.

After completing similar operations a few times, the user is toward three possible outcomes:

* Front-end design with a focus on CSS
* Back-end engineering with a C#/.NET or
* Hybrid back-end/front-end engineering with Ruby/Rails.

The branch engine in the _scripts.js_ file allows for a tie. In that event (when the back-end score equals the front-end score), the user is told they can pick whichever path they choose, as Epicodus' curriculum should prepare them for both worlds.

The HTML in _index.html_ builds out the form; _styles.css_ and _scripts.js_ format and decorate the page, and _scripts.js_ provides the simple logic.

### License

The author, Michael Arrington, waives most all rights and responsibilities in accordance with the MIT License. If you see a way to monetize this project, please let him know how at michaelarringtoniphone@gmail.com.
