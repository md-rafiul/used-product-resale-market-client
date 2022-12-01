import React from "react";

const Blogs = () => {
  return (
    <div className="p-4">
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            The Four Kinds of React State to Manage When we talk about state in
            our applications, its important to be clear about what types of
            state actually matter. There are four main types of state you need
            to properly manage in your React apps: Local state Global state
            Server state URL state Let's cover each of these in detail: Local UI
            state Local state is data we manage in one or another component.
            Local state is most often managed in React using the useState hook.
            For example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a forms
            inputs. Global UI state Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global. Server state Data that comes
            from an external server that must be integrated with our UI state.
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state. There are several
            pieces of state that must be managed every time you fetch or update
            data from an external server, including loading and error state.
            Fortunately there are tools such as SWR and React Query that make
            managing server state much easier. URL state Data that exists on our
            URLs, including the pathname and query parameters. URL state is
            often missing as a category of state, but it is an important one. In
            many cases, a lot of major parts of our application rely upon
            accessing URL state. Try to imagine building a blog without being
            able to fetch a post based off of its slug or id that is located in
            the URL! There are undoubtedly more pieces of state that we could
            identify, but these are the major categories worth focusing on for
            most applications you build.
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object.In programming, we often
            want to take something and extend it. For instance, we have a user
            object with its properties and methods, and want to make admin and
            guest as slightly modified variants of it. Wed like to reuse what we
            have in user, not copy/reimplement its methods, just build a new
            object on top of it. Prototypal inheritance is a language feature
            that helps in that. Prototype In JavaScript, objects have a special
            hidden property Prototype as named in the specification, that is
            either null or references another object. That object is called “a
            prototype”: When we read a property from object, and its missing,
            JavaScript automatically takes it from the prototype. In
            programming, this is called “prototypal inheritance”. And soon well
            study many examples of such inheritance, as well as cooler language
            features built upon it. The property Prototype is internal and
            hidden, but there are many ways to set it. One of them is to use the
            special name __proto__, like this:
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            Unit testing still causes controversy among developers and product
            managers. There are both opponents and supporters of this kind of
            testing. In this article, Ill highlight the main advantages of unit
            testing. What are unit tests, why unit testing is important, and how
            it they help developers and business owners? For the answers to
            these questions and more, read on. Lets start with the definition:
            Unit testing is a software testing method where “units”—the
            individual components of software—are tested. Developers write unit
            tests for their code to make sure that the code works correctly.
            This helps to detect and protect against bugs in the future.
            Sometimes developers write unit tests first, then write the code.
            This approach is also known as test-driven development TDD. In TDD,
            requirements are turned into specific test cases, then the software
            is improved to pass the new tests. In this approach, no code is
            added that hasnt been proven to meet defined requirements. Unit
            testing is similar, in that it allows developers to modify code
            without affecting the functionality of other units or the product,
            as a whole. Unit tests are usually written in the form of functions
            and check the value and behavior of these functions in various
            scenarios. For example, lets imagine a function for the division of
            two numbers: the developer decides to follow the TDD approach, first
            writing a test with the input of values 4 and 2 4 divided by 2 with
            2 expected as the result. Another example: when the divisor is zero,
            we dont expect that the function will produce a value—we expect that
            it will generate an exception. We can expect that the function will
            notify some component about an attempt to divide by zero. Thus, we
            test two cases: In an invalid situation, the function will notify us
            that we are doing something wrong an exceptional situation The
            function will identify this invalid situation and log it
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            Angular vs React If the choice youre making is based on Angular vs
            React alone, then youll simply need to consider the pros and cons
            discussed for those libraries in this post. But overall, keep in
            mind that both libraries can be used for mobile and web apps, while
            Angular is generally better for more complex apps that are
            enterprise-ready. React often requires extra modules and components,
            which keeps the core library small, but means theres extra work
            involved when incorporating outside tools. Angular, on the other
            hand, is more of a full-fledged solution that doesnt require extras
            like React often does, though it does have a steeper learning curve
            for its core compared to React. React is more suitable for
            intermediate to advanced JavaScript developers who are familiar with
            concepts from ES6 and up, while Angular favors those same developers
            who are also familiar with TypeScript. React vs Vue The choice
            between React vs Vue is often debated and its not an easy one. Vue
            has a vibrant and ever-growing community and has taken over
            popularity vs. React in many respects. React developers are still
            churning out lots of new components and extras, so theres no sign
            that React is on the decline either. Vue is generally more suited to
            smaller, less complex apps and is easier to learn from scratch
            compared to React. Vue can be easier to integrate into new or
            existing projects and many feel its use of HTML templates along with
            JSX is an advantage. Overall, Vue might be the best choice if youre
            a newer developer and not as familiar with advanced JavaScript
            concepts, while React is quite well suited for experienced
            programmers and developers who have worked with object-oriented
            JavaScript, functional JavaScript, and similar concepts. Angular vs
            Vue In most cases, you probably wouldnt be deciding between only
            Angular and Vue. They are vastly different libraries with very
            different feature sets and learning curves. Vue is the clear choice
            for less experienced developers, and Angular would be preferred for
            those working on larger apps. A large library like Angular would
            require more diligence in keeping up with whats new, while Vue would
            be less demanding in this regard and the fact that the two most
            recent major releases of Vue are in separate repositories helps. It
            should also be noted that Vue was created by a developer who
            formerly worked on Angular for Google, so thats another thing to
            keep in mind, though that wouldnt have a huge impact on your
            decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
