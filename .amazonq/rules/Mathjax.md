Getting Started with MathJax Components
MathJax allows you to include mathematics in your web pages, either using LaTeX, MathML, or AsciiMath notation, and the mathematics will be processed using JavaScript to produce HTML or SVG for viewing in any modern browser.

MathJax Components
To make using MathJax easier in web pages, the various pieces that make up MathJax have been packaged into separate files called components. For example, there is a component for MathML input, and one for SVG output, and the various TeX extensions are packaged as separate components. You can mix and match these components to customize MathJax to suit your particular needs (this is described in detail in the section on Configuring MathJax below); the individual component files that you specify are loaded when MathJax starts up.

There are also combined components that combine several others into one larger file that loads everything you need to run MathJax all at once. These represent some of the standard combinations of input and output formats, and you will probably find one of these that suits your needs. You can configure the various components in order to customize how they run, even when they are loaded as part of a combined component. For example, you can set the delimiters to be used for in-line and displayed math for the TeX input component whether the TeX component was loaded individually, or as part of the component.tex-chtml

It is even possible for you to create your own components or custom builds of MathJax, or incorporate the MathJax components into larger files that contain other assets your website might need (see the section on Making a Custom Build of MathJax for more details).

Ways of Accessing MathJax
There are two ways to access MathJax for inclusion in web pages: link to a content delivery network (CDN) like to obtain a copy of MathJax, or download and install a copy of MathJax on your own server (for network access) or hard disk (for local use without a network connection). The first method is described below, while the second is discussed in the section on Hosting Your Own Copy of MathJax.cdn.jsdelivr.net

This page gives the quickest and easiest ways to get MathJax up and running on your web site, but you may want to read the details in the linked sections in order to customize the setup for your pages.

Using MathJax from a Content Delivery Network (CDN)
The easiest way to use MathJax is to link directly to a public installation available through a Content Distribution Network (CDN). When you use a CDN, there is no need to install MathJax yourself, and you can begin using MathJax right away. The CDN will automatically arrange for your readers to download MathJax files from a fast, nearby server.

To use MathJax from a CDN, you need to do three things:

Include a MathJax configuration in your page (this may be optional in some cases).

Link to the CDN copy of MathJax in the web pages that are to include mathematics.

Put mathematics into your web pages so that MathJax can display it.

There are many free CDN services that provide copies of MathJax. Most of them require you to specify a particular version of MathJax to load, but some provide “rolling releases”, i.e., links that update to the latest available version upon release.

Note

MathJax no longer provides a means of obtaining the latest version itself. This used to be done by loading the file, but that has been removed in version 4.latest.js

The following are some of the CDNs that offer MathJax:

jsdelivr.com [latest or specific version] (recommended)

unpkg.com [latest or specific version]

cdnjs.com

raw.githack.com

cdn.statically.io

To jump start using , you accomplish the first two steps by puttingjsdelivr

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
into the block of your document. (It can also go in the if necessary, but the head is to be preferred.) This will load the latest 4.x.y version of MathJax from the distributed server, configure it to recognize mathematics in both TeX and MathML notation, and ask it to generate its output using HTML with CSS (the CommonHTML output format) to display the mathematics.<head><body>

Warning

The file includes all the pieces needed for MathJax to process these two input formats and produce this output format. There are several other choices with different input/output combinations, and you can even configure MathJax to load components individually.tex-mml-chtml.js

We list this file here because it will get you started quickly with MathJax without having to worry too much about configurations; but since it is one of the most general of the combined component files, it is also one of the largest, so you might want to consider a smaller one that is more tailored to your needs. See the section on Configuring MathJax for more details on how this is done, and on The MathJax Components for information about the components themselves.

If you use the code snippet given above, you will not need to change the URL whenever MathJax is updated and the version changes, because offers the notation for obtaining the file from the latest version (4.x.y) available on the CDN.jsdelivrmathjax@4tex-mml-chtml.js

Getting a Specific Version
It is also possible to always use a specific version, regardless of the current version of MathJax. To do this, simply give the full version number in the URL; for example:

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-mml-chtml.js"></script>
will always load version 4.0.0 of the combined component file.tex-mml-chtml.js

Other CDNs have slightly different formats for how to specify the version number. For example, uses the following:cdnjs

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.0.0/tex-mml-chtml.js"></script>
to get the same file.

Browser Compatibility
MathJax supports all modern browsers (Chrome, Safari, Firefox, Edge), and most mobile browsers. We no longer test MathJax with IE11, so you should not expect it to work with any version of Internet Explorer. We used to recommend loading the library in order to help MathJax work with older browsers, but that is not necessary for modern browsers, and we no longer recommend it.polyfill

Warning

The original polyfill website was purchased by a Chinese company in 2024, and has been used to inject malware into pages that use it. You should NOT use the library any longer, and should either remove the reference entirely, or switch to a link from another source. See this post for more details.polyfill.io

Configuring MathJax
The combined component files, like , include default settings for the various options available in MathJax. You may need to adjust those to suit your needs. For example, the TeX input component does not enable single dollar signs as delimiters for in-line mathematics because single dollar signs appear frequently in normal text, e.g. “The price is $50 for the first one, and $40 for each additional one”, and it would be confusing the have “50 for the first one, and” be typeset as mathematics.tex-mml-chtml.js

If you wish to enable single dollar signs as in-line math delimiters, you need to tell MathJax that by providing an explicit MathJax configuration. That is accomplished by using a tag to set the global variable to hold a configuration for MathJax and placing that script before the one that loads the MathJax component file that you are using. For example<script>MathJax

<script>
MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>
configures MathJax’s TeX input component to add as inline-math delimiters in addition to the default delimiters (thus enabling single dollar signs as math delimiters), and then loads the component for TeX input and CommonHTML output.$...$\(...\)tex-chtml.js

There are many options that can be set in this way. See the instructions for Configuring MathJax for more details, and the section on MathJax Configuration Options for information on the available options for the various components.

Putting Mathematics in a Web Page
Once MathJax is configured and loaded, it will look through your web page for mathematics for it to process. There are three available formats for that mathematics: TeX/LaTeX, MathML, and AsciiMath. The TeX/LaTeX and AsciiMath formats are plain text formats that use special delimiter characters to separate the mathematics from the rest of the text of your document, while the MathML format is an XML format that uses “tags” (similar to HTML tags) to represent the mathematics. TeX and AsciiMath are often written by hand, but MathML usually is generated by mathematical software or specialized editors.

See the section on Writing Mathematics for MathJax for more details about how to enter mathematics in these three formats.

Note that once MathJax has processed the page, it will not run again without you explicitly telling it to. For example, if you add new mathematics to the page after MathJax has already run, that math will not be processed by MathJax until you request that to happen. See the section on MathJax in Dynamic Content for details of how to do that.

Where to Go from Here?
If you have followed the instructions above, you should now have MathJax installed and configured in your web page, and you should be able to use MathJax to write web pages that include mathematics. At this point, you can start making pages that contain mathematical content!

You could read more about the details of how to customize MathJax.

You can also check out the MathJax examples for illustrations of using MathJax.

If you are working on dynamic pages that include mathematics, you might want to read about MathJax in Dynamic Content, so you know how to include mathematics in your interactive pages.

Finally, if you have questions or comments, or want to help support MathJax, you could visit the MathJax community forums or the MathJax bug tracker.
Configuring MathJax
MathJax provides a number of combined component files, like tex-chtml.js, that group various components that are commonly used together into a single file. If you use one of the combined component files, you may not need to do any configuration at all. You can modify the default configuration by using a javascript variable that you define before loading the combined configuration file, as described below.

Note

The configuration, loading, and startup processes for MathJax versions 3 and 4 are different from those of version 2 in a number of ways. Where version 2 had several different methods for configuring MathJax, v3 and v4 streamline the process and have only one. In version 2, you always loaded MathJax.js, and added a config=... parameter to provide a combined configuration file, but in version 3 and above you load one of several different files, depending on your needs, avoiding the multiple file transfers that was required in v2.

The Configuration Variable
To configure MathJax, you use a global javascript object named MathJax that contains configuration data for the various components of MathJax. For example, to configure the TeX input component to use single dollar signs as in-line math delimiters (in addition to the usual \(...\) delimiters) and the SVG output component to use a global font cache for all expressions on the page, you would use

MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  },
  svg: {
    fontCache: 'global'
  }
};
The sections below describe the different places you could put such a configuration. For information on the options that you can set for each of the components, see the MathJax Configuration Options pages.

Configuration Using an In-Line Script
The easiest way to configure MathJax is to place the MathJax object in a <script> tag just before the script that loads MathJax itself. For example:

<script>
MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  },
  svg: {
    fontCache: 'global'
  }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
This will configure the TeX input component to add single dollar signs as in-line math delimiters, and the SVG output component to use a global font cache (rather than a separate cache for each expression on the page), and then loads the latest version of the tex-svg component file from the jsdelivr CDN. This will typeset any TeX mathematics on the page, producing SVG versions of the expressions.

Using a Local File for Configuration
If you are using the same MathJax configuration over multiple pages, you may find it convenient to store your configuration in a separate JavaScript file that you load into the page. For example, you could create a file called mathjax-config.js that contains

window.MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  },
  svg: {
    fontCache: 'global'
  }
};
and then use

<script defer src="mathjax-config.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
to first load your configuration file, and then load the tex-svg component from the jsdelivr CDN.

Note

Here we use the defer attribute on both scripts so that they will execute in order, but still not block the rest of the page while the files are being downloaded to the browser. If the async attribute were used, there is no guarantee that the configuration would run first, and so you could get instances where MathJax doesn’t get properly configured, and they would seem to occur randomly.

Configuring and Loading in One Script
It is possible to have the MathJax configuration file also load MathJax as well, which would be another way to handle the problem of synchronizing the two scripts described above. For example, you could make the file load-mathjax.js containing

window.MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js';
  script.defer = true;
  document.head.appendChild(script);
})();
and then simply link to that file via

<script src="load-mathjax.js" async></script>
This script can be async because it doesn’t have to synchronize with any other script. This will allow it to run as soon as it loads (since it is small, there is little cost to that), meaning the script to load MathJax itself will be inserted as soon as possible, so that MathJax can begin downloading as early as possible. (If this script were loaded with defer, it would not run until the page was ready, so the script to load MathJax would not be inserted until then, and you would have to wait for MathJax to be downloaded before it could run.)

Configuring MathJax After it is Loaded
As described above, the global variable MathJax is used to store the configuration for MathJax. Once MathJax is loaded, however, MathJax changes the MathJax variable to contain the various methods needed to control MathJax. The initial configuration that you provided is moved to the MathJax.config property so that its contents doesn’t conflict with the new values provides in MathJax. This occurs when the MathJax component you have requested is loaded (and before the startup ready() function is called).

Once MathJax has created the objects that it needs (like the input and output jax), changes to the configuration may not have any effect, as the configuration values were used during the creation of the objects, and that is already complete. Most objects make a copy of their configuration from your original MathJax object, so changing the values in MathJax.config after the objects are created will not change their configurations. (You can change MathJax.config values for objects that haven’t been created yet, but not for ones that have.)

For some objects, like input and output jax, document handlers, and math documents, the local copies of the configuration settings are stored in the options property of those objects, and you may be able to set the value there. For example, MathJax.startup.output.options.scale is the scaling value for the output, and you can set that at any time to affect any subsequent typeset calls.

Note that some options are moved to sub-objects when the main object is created. For example, with the TeX input jax, the inlineMath and similar options are used to create a FindTeX object that is stored at MathJax.startup.document.inputJax.tex.findTeX; but in this case, the FindTeX object uses the configuration once when it is created, so changing MathJax.startup.document.inputJax.tex.findTeX.options after the fact will not affect it. (There is a getPatterns() method of the FindTeX object that could be used to refresh the object if the options are changed, however.)

If you need to change the configuration for an object whose options can’t be changed once it is created, then you will need to create a new version of that object after you change the configuration. For example, if you change MathJax.config.tex.inlineMath after MathJax has started up, that will not affect the TeX input jax, as described above. In this case, you can call MathJax.startup.getComponents() to ask MathJax to recreate all the internal objects (like MathJax.startup.document), and this will cause them to be created using the new configuration options. Note, however, that MathJax will no longer know about any mathematics that has already been typeset, as that data was stored in the objects that have been discarded when the new ones are created. This includes the data about the global font cache for SVG output, and the CHTML CSS cache, so this is not something you should do lightly.

Converting your old Configuration to v4
The configuration options for v4 are basically the same as for v3, with some new ones added, you should be able to use your current v3 configuration in v4 without change. The only major caveat is if you have used a ready() function in the startup section of your configuration to make modifications or additions to MathJax’s code, in which case, those might need to be adjusted. See the What’s New in MathJax section for more details.

Because the current MathJax configuration options are somewhat different from their version 2 counterparts, we provide an automated configuration conversion tool to help you move from version 2 to the current version. Simply paste your current MathJax.Hub.Config() call into the converter, press Convert and you should get the equivalent v3/v4 configuration, and comments about any options that could not be translated to the current version (some options are not yet implements, others no longer make sense in version 4). See the instructions on the converter page for more details.
Loading MathJax
Once you have configured MathJax, you can then load the MathJax component file that you want to use. Most often, this will mean you load a combined component that loads everything you need to run MathJax with a particular input and output format. For example, the tex-svg component would allow you to process TeX/LaTeX input and produce SVG output. To do so, use a script like the following

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
to get the latest (4.x.y) version of the tex-svg component from the jsdelivr CDN.

Warning

Version 3 used /es5 just before the component name in the URL for obtaining the MathJax. This is no longer the case for version 4.

The example above takes advantage of the feature of jsdeliver that allows you to get the latest version using the mathjax@4 notation. To obtain a specific version, you would use a tag like

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-svg.js"></script>
to always get the 4.0.0 version of the tex-svg component, even when later versions become available.

Other CDNs have slightly different formats for how to specify the version number. For example, cdnjs uses the following:

<script defer src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.0.0/es5/tex-svg.js">
</script>
Some CDNs don’t provide a means of getting the latest version automatically, so you should check the documentation for the CDN you are planning to use to see if they support that, and how to indicate it in your source URL.

See The MathJax Components for a list of the various components you can choose and descriptions of their contents. See the list of CDNs for the URLs for a number of CDNs that serve MathJax.

Note that the script that sets the MathJax configuration variable should come before the script that loads the MathJax component file, otherwise MathJax will not know what configuration you need. If you use one of the combined component files, you may not need to do any configuration at all.

Loading Components Individually
If none of the combined component files suits your needs, you can specify the individual components you want by setting the load array in the loader section of your MathJax configuration, and load the startup.js component.

For example

<script>
MathJax = {
  loader: {
    load: ['input/tex-base', 'output/svg', 'ui/menu', '[tex]/require']
  },
  output: {
    font: 'mathjax-newcm'
  },
  tex: {
    packages: {'[+]': ['require']}
  }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/startup.js"></script>
would cause the base TeX input, the SVG output (with the mathjax-newcm font), the contextual menu code, and the TeX \require macro extension components to be loaded (and tells TeX to use the require extension in addition to the base TeX macros). In this way, you can load exactly the components you want. Note, however, that each component will be loaded as a separate file, so it is better to use a combined component file if possible.

Loading Additional Components
You can use the load array described in the previous section to load additional components even if you are using one of the combined components. For example

<script>
MathJax = {
  loader: {
    load: ['[tex]/colorv2']
  },
  tex: {
    packages: {'[+]': 'colorv2'},
    autoload: {color: []}
  }
};
</script>
<script defe src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js">
</script>
would load the version-2-compatible \color macro, inform TeX to add that to the packages that it already has loaded, and not autoload the default version 3 color (the LaTeX-compatible one). This is done on top of the tex-chtml combined configuration file, so the TeX input and CommonHTML output formats are already included (as are the contextual menu, and several TeX packages; see The MathJax Components for details).

Loading MathJax Only on Pages with Math
The MathJax combined configuration files are large, and so you may wish to include MathJax in your page only if it is necessary. If you are using a content-management system that puts headers and footers into your pages automatically, you may not want to include MathJax directly, unless most of your pages include math, as that would load MathJax on all your pages. Once MathJax has been loaded, it should be in the browser’s cache and load quickly on subsequent pages, but the first page a reader looks at will load more slowly, and some mobile devices don’t cache files that are larger than a certain limit.

In order to avoid that, you can use a script like the following one that checks to see if the content of the page seems to include math, and only loads MathJax if it does. Note that this is not a very sophisticated test, and it may think there is math in some cases when there really isn’t but it should reduce the number of pages on which MathJax will have to be loaded.

Create a file called check-for-tex.js containing the following:

(function () {
  const body = document.body.textContent;
  if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: {'[+]': [['$', '$']]}
        }
      };
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js';
    document.head.appendChild(script);
  }
})();
and then use

<script src="check-for-tex.js" defer></script>
in order to load the script when the page content is ready. Note that you will want to include the path to the location where you stored check-for-tex.js, that you should change tex-chtml.js to whatever combined-component file you want to use, and that the window.MathJax value should be set to whatever configuration you want to use. In this case, it just adds dollar signs to the in-line math delimiters. Finally, adjust the body.match() regular expression to match whatever you are using for math delimiters.

This simply checks if there is something that looks like a TeX in-line or displayed math delimiter, and loads MathJax if there is. If you are using different delimiters, you will need to change the pattern to include those (and exclude any that you don’t use). If you are using AsciiMath instead of TeX, then change the pattern to look for the AsciiMath delimiters.

If you are using MathML, you may want to use

if (document.body.querySelector('math')) {...}
for the test instead (provided you aren’t using namespace prefixes, like <m:math>).
Performing Actions During Startup
There are several ways to hook into the MathJax startup process so that you can do additional configuration, perform actions after the initial typesetting, and so on. The primary way to do this is to use one of two hooks that can be set in the block of your configuration: the ready() function and the pageReady() function.startup

The ready() function is what MathJax calls when all the requested MathJax components have been loaded, and MathJax is ready to set up the internal objects needed to process the mathematics on the page (like the input and output jax). This function builds those structures, creates functions in the object to make typesetting and format conversion easy for you, sets up the pageReady() call (described below), and creates a promise for when that is complete. You can override the ready() function with one of your own to replace that startup process completely, or to perform actions before or after the usual initialization. For example, you could do additional setup before MathJax creates the objects it needs, or you could hook into the typesetting promise to synchronize other actions with the completion of the initial typesetting. Examples of these are given below.MathJax

The pageReady() function is performed when the HTML page is loaded and ready to be typeset, and MathJax itself is ready (all its components are loaded, and the internal objects have been created). The default is for pageReady() to perform the initial typesetting of the page, but you can override that to perform other actions instead, such as delaying the initial typesetting while other content is loaded dynamically, for example. The ready() function sets up the call to pageReady() as part of its default action.

The return value of the default pageReady() is a promise that is resolved when the initial typesetting is finished. If you override the pageReady() method, your function should return a promise as well. For example, if your function calls MathJax.startup.defaultPageReady(), then you should return the promise that it returns (or a promise obtained from its or methods). If you don’t, then MathJax will think that the initial typesetting is complete even though it isn’t, which can lead to incorrect behavior if other typesetting needs to be performed later.then()catch()

Using these two functions separately or in combination gives you full control over the actions that MathJax takes when it starts up, and allows you to customize MathJax’s startup process to suit your needs. Several examples for common situations are given below.

Performing Actions During Initialization
If you want to perform actions after MathJax has loaded all the needed components, you can set the ready() function to a function that does the needed actions and calls MathJax.startup.defaultReady() to perform the usual startup process.

Actions coming before the MathJax.startup.defaultReady() call are run before any initialization has been done. In particular, this is before any input or output jax are created, so this is where customization of the MathJax object definitions could be performed. For example, you could modify the configuration blocks at this point, or you could create subclasses of the MathJax objects that override some of their methods to produce custom behavior, and then register those subclasses with MathJax so they will be used in place of the originals. It is also possible to create TeX extensions on the fly and add them at this point.

Actions coming after the MathJax.startup.defaultReady() call are run after initialization is complete. In particular, all the internal objects used by MathJax (e.g., the input and output jax, the math document, the DOM adaptor, etc) will have been created, and the typesetting and conversion methods will have been created in the object.MathJax

In addition, the variable MathJax.startup.promise will hold a promise that is resolved when the initial typesetting is complete, but note that the typesetting has not yet been performed at this point. You can use this promise to set up actions that should occur after the initial typesetting is complete. This is discussed further in the next section.

window.MathJax = {
  startup: {
    ready() {
      console.log("MathJax is loaded, but not yet initialized");
      MathJax.startup.defaultReady();
      console.log("MathJax is initialized and the initial typeset is queued, but hasn't run");
      MathJax.startup.promise.then(() => {
        console.log("The initial typesetting is complete");
      });
    }
  }
};
The console messages above indicate the MathJax’s state at each point in the code. For example, you can’t do any typesetting in the section before MathJax.startup.defaultReady(), while you potentially could after it, thought it is better to wait for the MathJax.startup.promise before doing so, except in special circumstances where you know that the typesetting will not cause any extensions to be loaded dynamically.

Here is an example that uses the ready() function to convert the numbers in the full-width Unicode block to their ASCII counterparts for better formatting by MathJax.

MathJax = {
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.document.inputJax.tex.preFilters.add(
        ({math}) => {
          math.math = math.math.replace(/[\uFF01-\uFF5E]/g,
            (c) => String.fromCodePoint(c.codePointAt(0) - 0xFF00 + 0x20));
        }
      );
    }
  }
}
This configuration adds a pre-filter to the TeX input jax that performs a substitution on the TeX source () for each expression being processed that looks for full-width numerals and replaces them with the corresponding ASCII numerals.math.math

Here is an example that waits for the initial typesetting to complete and then prints to the console the TeX code for all the expressions on the page.

MathJax = {
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        for (const item of MathJax.startup.document.math) {
          console.log(item.math);
        }
      });
    }
  }
}
Finally, here is an example that modifies the AsciiMath input jax to allow both in-line and display-mode equations by using for in-line delimiters and for display-mode delimiters.`...```...``

MathJax = {
  loader: {load: ['input/asciimath', 'output/chtml']},
  output: {font: 'mathjax-newcm'},
  asciimath: {
    delimiters: [['``','``'], ['`','`']]
  },
  startup: {
    ready() {
      const {AsciiMath} = MathJax._.input.asciimath_ts;
      Object.assign(AsciiMath.prototype, {
        _compile: AsciiMath.prototype.compile,
        compile(math, document) {
          math.display = (math.start?.delim === '``');
          const result = this._compile(math, document);
          const mstyle = result.childNodes[0].childNodes.pop();
          mstyle.childNodes.forEach(child => result.appendChild(child));
          if (math.display) {
            result.attributes.set('display', 'block');
          }
          return result;
        }
      });
      MathJax.startup.defaultReady();
    }
  }
};
This saves the old AsciiMath function and replaces it with a new one that removes the original element created by AsciiMath that sets the display mode, and sets the mode on the outer tag depending on the delimiter used.compile()mstylemath

Performing Actions After Typesetting
Often, you may need to wait for MathJax to finish typesetting the page before you perform some action. To accomplish this, you can override the ready() function, having it perform the MathJax.startup.defaultReady() action, and then use the MathJax.startup.promise to queue your actions; these will be performed after the initial typesetting is complete.

window.MathJax = {
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};
As an alternative, you can override the pageReady() function, and use the promise returned from the MathJax.startup.defaultPageReady() function:

window.MathJax = {
  startup: {
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};
Be sure that you return the promise that you obtain from method, otherwise MathJax.startup.promise will resolve before the initial typesetting (and your code) has been performed, which may cause other code to run too soon.then()

Our first example above shows how to use MathJax.startup.promise within the ready() function, but that promise is set up as soon as MathJax is loaded, so it can be used outside of the ready() function. You must be careful, however, that MathJax is loaded before you try to use it. For example, if you use or attributes on the script tag that loads MathJax, then you need to be sure your code that uses MathJax.startup.promise() doesn’t run until after MathJax has been loaded.deferasync

One way to do that is to use on both the script that loads MathJax and the one that uses MathJax.startup.promise, and to put your script after the one that loads MathJax. Since deferred scripts run in the order in which they appeared in the HTML document, that will guarantee that MathJax.startup.promise will be defined when you use it. For example,defer

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
<script defer src="mathjax-dependent-code.js"></script>
where the file contains the MathJax.startup.promise reference, such asmathjax-dependent-code.js

MathJax.startup.promise.then(() => {
  console.log('MathJax initial typesetting complete');
});
In this case, the MathJax-dependent code won’t run until after MathJax is loaded.

You can’t use the attribute on a script tag without a attribute, but if you want to use an in-line script that uses MathJax.startup.promise, then you can use a script with , as these have the attribute by default. For example,defersrctype="module"defer

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
<script type="module">
MathJax.startup.promise.then(() => {
  console.log('MathJax initial typesetting complete');
});
</script>
will work to guarantee that the promise is defined when the script is executed.

Summary
The following terms were discussed above:

ready()
This is the function called when MathJax has loaded the needed components and is ready to start setting up the objects needed for typsetting the document. You can override it in the section of the configuration object in order to perform customization when MathJax loads, or to set up actions to perform after the initial typesetting is complete.startupMathJax

MathJax.startup.defaultReady()
This is the default for the ready() function above. You can call it from your function in order to perform the usual action.ready()ready()

pageReady()
This is the function called when the page is loaded and MathJax is ready to perform typesetting. You can override it in the section of the configuration object in order to do your own processing, or to set up actions to perform after the initial typesetting is complete.startupMathJax

Returns
:
A promise that resoloves when the actions taken by your function is complete.

MathJax.startup.defaultPageReady()
This is the default for the pageReady() function above. You can call it from your function in order to perform the usual action.pageReady()pageReady()

Returns
:
A promise that resolves when the initial page typesetting is complete.

MathJax.startup.promise
A promise that resolves when MathJax completes its initially typesetting.
The MathJax Components
In order to make it possible to customize what parts of MathJax you include in your web pages, the MathJax code has been broken into individual pieces, called components. These are designed to share common code so that you don’t download the same thing more than once, while still making it possible to only download the parts that you need. There are individual components for the various input and output processors in MathJax, for the individual TeX extensions, for the various font selections, and for other specialized pieces, such as the MathJax contextual menu and the assistive technology support. These can be mixed and matched in whatever combinations you need.

There are some obvious combinations of components; for example, TeX input together with SVG output, or MathML input with CommonHTML output. MathJax provides a number of these common combinations as complete packages that contain almost everything you need to run mathjax in your page in a single file, though you can also configure additional extensions to be loaded as well, and MathJax may autoload other components when they are needed.

Note

In version 3, there were a number of combined components that included most of the TeX extensions. These components ended in -full. Because the number of extensions has grown, and continues to do so, including with third-party extensions, it is impractical to include all the extensions in a single file. In version 4, the -full versions have been removed, along with the all-packages extension.

Components provide a great deal of flexibility in determining the pieces of MathJax that you use. You can even make your own custom builds of MathJax that package exactly the pieces that you want to use. See Making a Custom Build of MathJax for more details about how to do that.

See the Loading MathJax section for details about how to specify and load MathJax components.

See the MathJax Configuration Options section for details about how to configure the various MathJax components.

The Components

Combined Components
tex-chtml
tex-svg
tex-mml-chtml
tex-mml-svg
mml-chtml
mml-svg
tex-chtml-nofont
tex-svg-nofont
tex-mml-chtml-nofont
tex-mml-svg-nofont
mml-chtml-nofont
mml-svg-nofont
Input Components
input/tex
input/mml
input/asciimath
Output Components
output/chtml
output/svg
Accessibility Components
a11y/semantic-enrich
a11y/speech
a11y/explorer
a11y/complexity
a11y/assistive-mml
Miscellaneous Components
startup
ui/safe
ui/lazy
ui/menu
adaptors/liteDOM
core
loader
Combined Components
Currently there are twelve combined components, whose contents are described below:

tex-chtml

tex-svg

tex-mml-chtml

tex-mml-svg

mml-chtml

mml-svg

tex-chtml-nofont

tex-svg-nofont

tex-mml-chtml-nofont

tex-mml-svg-nofont

mml-chtml-nofont

mml-svg-nofont

The combined components include everything needed to run MathJax in your web pages (though some TeX extensions and additional font data may be loaded dynamically as needed). Each includes at least one input processor, an output processor, the basic data needed for the mathjax-newcm font, the contextual menu code, the assistive tools, and the startup component.

Unlike the other components, these combined components should be loaded directly via a <script> tag, not through the load array in your MathJax configuration. So a typical use would be

<script>
MathJax = {
  // your configuration here, if needed
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>
to load the tex-chtml component, for example.

Warning

Version 3 used /es5 just before the component name in the URL for obtaining the MathJax. This is no longer the case for version 4.

tex-chtml
The tex-chtml component includes the input/tex component and the output/chtml component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

The input/tex component includes the ams, newcommand, require, autoload, configmacros, textmacros, and noundefined extensions, which means that most other extensions will be loaded automatically when needed, or you can use the \require macro to load them explicitly.

tex-svg
The tex-svg component includes the input/tex component and the output/svg component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

The input/tex component includes the ams, newcommand, require, autoload, configmacros, textmacros, and noundefined extensions, which means that most other extensions will be loaded automatically when needed, or you can use the \require macro to load them explicitly.

tex-mml-chtml
The tex-mml-chtml component includes the input/tex and input/mml components and the output/chtml component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

The input/tex component includes the ams, newcommand, require, autoload, configmacros, textmacros, and noundefined extensions, which means that most other extensions will be loaded automatically when needed, or you can use the \require macro to load them explicitly.

tex-mml-svg
The tex-mml-svg component includes the input/tex and input/mml components and the output/svg component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

The input/tex component includes the ams, newcommand, require, autoload, configmacros, textmacros, and noundefined extensions, which means that most other extensions will be loaded automatically when needed, or you can use the \require macro to load them explicitly.

mml-chtml
The mml-chtml component includes the input/mml component and the output/chtml component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

mml-svg
The mml-svg component includes the input/mml component and the output/svg component configured to use the mathjax-newcm font, along with the contextual menu component, the assistive tools, and the startup component.

tex-chtml-nofont
The tex-chtml-nofont component is the same as the tex-chtml component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.

tex-svg-nofont
The tex-svg component is the same as the tex-svg component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.

tex-mml-chtml-nofont
The tex-mml-chtml component is the same as the tex-mml-chtml component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.

tex-mml-svg-nofont
The tex-mml-svg component is the same as the tex-mml-svg component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.

mml-chtml-nofont
The mml-chtml component is the same as the mml-chtml component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.

mml-svg-nofont
The mml-svg component is the same as the mml-svg component, but configured without a font, with the expectation that your configuration will specify the font explicitly. This reduces the size of the initial download when the mathjax-newcm font is going to be replaced by one of the other fonts.
 Specifying the size of HTML in ExpressionsView page source
Specifying the size of HTML in Expressions
MathJax v4 allows you to embed HTML within your mathematical expressions. See the texhtml extension documentation page for more about how to do this in LaTeX expressions, and the HTML in MathML token nodes section for how this is done in MathML.

In a browser, MathJax can measure the size of the HTML that is embedded in a mathematical expression, and so can provide the proper amount of space for it within the equation, but in node applications not running in a browser, that is not possible, so MathJax provides a method for you to specify the size of the HTML explicitly. To specify the dimensions, add data-mjx-hdw="H D W" to the top-level HTML element inside the <tex-html> tag or MathML token element, where H, D, and W are the height, depth, and width of the HTML. They can be in any units, but em units will work best.

For example,

\(x + <tex-html><span data-mjx-hdw="0.75em 0.25em 1em">
<img src="mypic.png" style="width: 1em; height: 1em; vertical-align: -.25em" />
</span></tex-html> + y\)
could be used to insert an image with a given size into a TeX expression, while

<math>
  <mi>x</mi>
  <mo>+</mo>
  <mtext>
    <span data-mjx-hdw="0.75em 0.25em 1em">
      <img src="mypic.png" style="width: 1em; height: 1em; vertical-align: -.25em" />
    </span>
  </mtex>
  <mo>+</mo>
  </mi>y</mi>
</math>
would do the same in MathML.

How this attribute is used is determined by a new option to the output jax, htmlHDW, which can be set to 'auto' (the default), 'ignore', 'use', or 'force'. When set to ignore, the data-mjx-hdw attribute is ignored and MathJax will try to measure the size of the HTML directly. This works well in the browser, but not in the liteDOM, jsdom, linkedom, or other non-browser adaptors. The force option means that MathJax will use the data-mjx-hdw values and will surround the HTML with additional nodes that force the HTML to have the given dimensions. This would make the browser and node both have the same representation, not relying on the browser measurements. The value use means that MathJax will assume the data-mjx-hdw values are correct and will use them in its size computations without forcing the HTML to have the given dimensions. Finally, auto means that MathJax will determine which option to use; this will be ignore when in the browser and force when in node applications.

Having accurate values for the data-mjx-hdw attribute is crucial to the quality of the output. To that end, the following HTML file computes the needed values. These values depend on the surrounding font; the page below gives you a place to enter the HTML you want to measure and the surrounding font to use. Press the “Compute HDW” and the HTML is shown below together with modified HTML source that includes the needed data-mjx-hdw attribute. You can copy that and replace the original HTML with it. The original HTML is displayed with red lines at the right and left indicating the height and depth of the HTML, and with horizontal lines indicating the baseline position.



The code for this tool is the following:

<!DOCTYPE html>
<html>
<head>
<title>Compute HDW values for HTML in Token nodes</title>
<style>
h1 {font-size: 120%}
</style>
<script>
function GetHDW() {
  const html = document.querySelector("mjx-html");
  const content = html.getBoundingClientRect();
  const baseline = document.querySelector("mjx-baseline").getBoundingClientRect();
  const em = parseFloat(window.getComputedStyle(html).fontSize);
  const h = baseline.top - content.top;
  const d = content.bottom - baseline.top;
  const w = content.right - content.left;
  return [h, d, w].map(x => (x / em).toFixed(3).replace(/\.?0+$/, "") + "em").join(" ");
}
function ShowHDW() {
  const html = document.querySelector("#html").value;
  const content = document.querySelector("mjx-html");
  content.style.fontFamily = document.querySelector("#family").value;
  content.innerHTML = html;
  const output = document.querySelector("#output");
  if (content.childNodes.length > 1) {
    const span = document.createElement("span");
    while (content.childNodes.length) {
      span.append(content.lastChild);
    }
    content.append(span);
  }
  content.firstChild.setAttribute("data-mjx-hdw", GetHDW());
  output.innerHTML = content.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
</script>
<style>
mjx-measure {
  display: inline-block;
  border-left: 2px solid red;
  border-right: 2px solid red;
}
mjx-baseline {
  display: inline-block;
  height: 0;
  width: 0;
}
mjx-html {
  display: inline-block;
}
mjx-line {
  display: inline-block;
  height: 0;
  width: 1em;
  border-top: 1px solid blue;
}
#input {
  display: inline-block;
}
#input textarea {
  margin-bottom: 3px;
}
#input input[type="button"] {
  float: right;
}
</style>
</head>
<body>

<h1>Compute HDW values for HTML in Token nodes</h1>

<p id="input">
<textarea id="html" cols="80" rows="10">
<span>HTML</span>
</textarea><br>
Font family: <input type="text" id="family" value="serif" />
<input type="button" value="Compute HDW" onclick="ShowHDW()" />
</p>
<h2>The HTML:</h2>
<p>
<mjx-line></mjx-line><mjx-measure><mjx-baseline></mjx-baseline><mjx-html>
&#xA0;
</mjx-html></mjx-measure><mjx-line></mjx-line>
</p>
<h2>The HTML with the HDW attribute:</h2>
<p id="output">
</p>

</body>
</html>
MathJax Output Formats
Currently, MathJax can render math in three ways:

Using HTML and CSS to lay out the mathematics,

Using Scalable Vector Graphics (SVG) to lay out the mathematics, or

As a serialized MathML string.

The first two are implemented by the and output processors. The third is a consequence of the fact that MathJax uses MathML as its internal format. While MathJax version 2 included a output processor that produced MathML notation for those browsers that support it, this has been dropped from version 3 and above. See the MathML Support section for more information on how to get MathML output.CommonHTMLSVGNativeMML

If you are using one of the combined component files, then this will select one of these output processors for you. If the component file ends in , then it is the CommonHTML output processor, while if it ends in then the SVG output processor will be used.-chtml-svg

If you are not using a combined component but instead are performing your own in-line or file-based configuration, you select which renderer you want to use by including either or in the array of the section of your MathJax configuration. For example'output/chtml''output/svg'loadloader

window.MathJax = {
  loader: {load: ["input/tex", "output/chtml"]}
};
would specify TeX input and CommonHTML output for the mathematics in your document.

Warning

The , , and output formats from version 2 are not available in version 3 and above. These may be available in future releases if there is demand for them. For now, the plain source can be shown by enteringPreviewHTMLPlainSourceNativeMML

MathJax.startup.document.state(0, true);
in the browser’s developer console.

More Information

HTML Support
SVG Support
MathML Support
MathJax Font Support
MathJax version 4 includes support for a number of new font sets for MathJax, and changes the default font to one based on the New Computer Modern fonts, which offer support for a much larger range of characters than MathJax’s original TeX font set, but is consistent with the look-and-feel of the original MathJax TeX fonts. The new set is slightly lighter, so will not seem so bold and will fit in better on Windows machines, without losing too much on linux, Mac OS, and iOS displays. The original MathJax TeX font set is also available as an option, for those who are unwilling to part with it.

There are 11 fonts available for MathJax v4:

Font Name

Original Source

mathjax-newcm

Based on New Computer Modern (now the default font)

mathjax-asana

A version of the Asana-Math font

mathjax-bonum

A version of the Gyre Bonum font

mathjax-dejavu

A version of the Gyre DejaVu font

mathjax-fira

A version of the Fira and Fira-Math fonts

mathjax-modern

A version of Latin-Modern

mathjax-pagella

A version of the Gyre Pagella font

mathjax-schola

A version of the Gyre Schola font

mathjax-stix2

A version of the STIX2 font

mathjax-termes

A version of the Gyre Termes font

mathjax-tex

The original MathJax TeX font

You can specify the font you want to use by setting the font option in the new output block of your MathJax configuration (where options common to both output renderers can be placed). For example,

MathJax = {
  output: {
    font: 'mathjax-stix2'
  }
};
will select the mathjax-stix2 font. For in-browser use, this will obtain the font and its data from cdn.jsdelivr.net and no other configuration is necessary. For node applications, first install the font via

npm install @mathjax/mathjax-stix2-font
(add -font to the name of whichever font you want, and obtain it from the @mathjax scope); MathJax should find the font in your node_modules/@mathjax folder. It is also possible to configure the path to the fonts using the fontPath option of the output block. This should be set to a string that indicates where the font can be found; that string should include %%FONT%% in any part of the path where the font name needs to appear. For example,

MathJax = {
  output: {
    fontPath: '@mathjax/%%FONT%%-font'
  }
};
is the default path in node applications.

It is also possible to specify an explicit URL as the font name in the configuration:

MathJax = {
  output: {
     font: 'https://cdn.jsdelivr.net/npm/@mathjax/mathjax-stix2-font'
  }
};
For those who wish to use the original MathJax font as it appears in version 3, specify the font as mathjax-tex.

The combined component files, like tex-chtml.js and mml-svg.js, include the new mathjax-newcm font as part of the component so that only one file needs to be downloaded. But if you want to use a different font, you probably don’t want to download mathjax-newcm first and then the font you actually want to use. Instead, you should use a component ending in -nofont.js, for example, tex-chtml-nofont.js, so that the initial download is smaller, as it doesn’t include mathjax-newcm.

Font Extensions
MathJax v4 also includes the ability to add new ranges of characters to an existing font, or to replace some characters with alternative ones. An extension may only apply to a specific font (if it relies on the existing characters to make stretchy assemblies, for example), but others may be able to apply to any font.

Currently, there are four extensions, and all can be applied to any of the fonts listed above.

Font Name

Original Source

mathjax-euler

A version of the Neo Euler font

mathjax-bbm

The bbm double-struck fonts

mathjax-bboldx

The bboldx double-struck fonts

mathjax-dsfont

The dsfont double-struck fonts

The last three of these are loaded automatically by the bbm, bboldx, and dsfont extensions, respectively, when they are added to the load array in the loader section of your configuration, or if you use \require to load the extension. They don’t actually replace the original double-struck characters, but instead, place the new ones in a separate pseudo-variant used internally by MathJax, so are available only through the macros provided by the corresponding TeX extension.

For mathjax-euler, configure MathJax to load the given extension. For example,

MathJax = {
  loader: {
    paths: {font: 'https://cdn.jsdelivr.net/npm/@mathjax'},
    load: ['[font]/mathjax-euler-font']
  }
};
would load the mathjax-euler font extension onto the default font being used.

Character Fallbacks
No font contains a suitable glyph for every character specified in the Unicode standard. When MathJax encounters a character that isn’t in the font that it is using, it will fall back to other fonts in a variety of ways.

First, MathJax can enhance the coverage in a particular font by combining characters that already exist in order to form new ones. For example, in the mathjax-tex font, which has a double integral (U+222C) but no quadruple integral (U+2A0C), MathJax an use two copies of the double integral to generate a quadruple integral.

If MathJax can’t find or create a needed character in its fonts, it will look through a fallback chain for the font variant in use. For example, if an expression requests a double-struck letter for which no double-struck glyph is available, a bold-faced one will be used, if possible, otherwise, the normal version will be shown, if there is one.

When a character is not available anywhere in the fallback chain, MathJax will ask the browser to provide the glyph from a system font. Since in that final case, MathJax will not have the necessary data on the glyph’s bounding box, MathJax will guess these metrics. When run in a browser, MathJax will be able to determine the character’s width, but not its height and depth, so it will use default values for these metrics. Measuring the width can negatively affect the rendering speed, and guessing the height and depth can reduce the quality of the resulting output. When used on a server or in a command-line application, MathJax won’t even be able to determine the width, and that has even more serous consequences for the layout, in general. Thus it is best to use only the characters that are in the MathJax fonts when using server-side rendering.

Fortunately, the new fonts in v4 all have much greater character coverage than the original mathjax-tex font, so there should be far fewer instances where the fallback mechanisms come into play.

Dynamically Loaded Font Ranges
Because the new MathJax fonts include more extensive character coverage, meaning much more data is required, the fonts have been broken down into smaller pieces that can be loaded dynamically, rather than being one big data file, as was the case with version 3. This allows the initial download of MathJax to be smaller, while still accommodating rarely used glyphs for those who need them.

As a result, however, when the data for one of these ranges is needed, MathJax will pause and wait for the data to arrive from the CDN or from your server. That means that producing MathJax output is now potentially an asynchronous process, which was not the case in v3.

In version 3, as long as you pre-loaded all the TeX extensions that you needed, you could use synchronous calls to MathJax.typeset(), MathJax.tex2svg(), or the other similar functions. With the new (larger) dynamic fonts in version 4, that is no longer guaranteed to work. Instead, if you are using a font other than mathjax-tex, you should use the promise-based versions of these calls, like MathJax.typesetPromise() or MathJax.tex2svgPromise(), in order to properly handle the potential for dynamically loaded font data. Without this, you may get a “retry” error, which is what MathJax uses to mediate its asynchronous loading actions.

If you can not avoid using synchronous calls, then you may need to load all the font dynamic data up front using a single promise-based call before you start using MathJax synchronously. This can be done using

MathJax.startup.document.outputJax.font.loadDynamicFiles();
to load all the font dynamic data. This function returns a promise, and you should wait for it to resolve before calling any MathJax conversion functions using either await or the promise’s then() method. For example, with the configuration

MathJax = {
  startup: {
    pageReady() {
      return MathJax.startup.document.outputJax.font
        .loadDynamicFiles()
        .then(() => MathJax.startup.defaultPageReady());
    }
  }
};
you will be able to use synchronous calls once the MathJax.startup.promise resolves, so you will only have to handle one asynchronous call and the rest can be synchronous.

Note, however, that this approach will load a lot of font data, and this can greatly slow down your initial page processing, especially on slow network connections like those for mobile devices. Only do this if you absolutely have to. It is far better to use the promise-based typesetting and conversion functions if you can.

If you know which font ranges you will need, it is possible to load only the ones you will be using, which will still allow synchronous typesetting, but not incur the startup penalty of loading all the data files. Here is a configuration that implements that approach:

MathJax = {
  fontFiles: ['calligraphic'],  // The dynamic font files to load
  startup: {
    pageReady() {
      const font = MathJax.startup.document.outputJax.font;
      const prefix = font.options.dynamicPrefix;
      const dynamic = font.constructor.dynamicFiles;
      const files = MathJax.config.fontFiles;
      return MathJax.loader
        .load(...(files.map((name) => `${prefix}/${name}`)))
        .then(() => files.forEach((name) => dynamic[name].setup(font)))
        .then(() => MathJax.startup.defaultPageReady());
    }
  }
};
This example loads the calligraphic range at startup so that \mathcal{} can be used with synchronous typesetting calls. You can add more ranges to the fontFiles lists as needed. You can find the names of the font ranges (which vary from font to font), by entering

Object.keys(MathJax.startup.document.outputJax.font.constructor.dynamicFiles)
in the browser’s developer console.

An alternative approach would be to create a custom build of MathJax that preloads additional ranges of characters. Examples based on MathJax components are given in the Using Components Synchronously section, and ones that use direct calls to the MathJax modules are given in the Linking to MathJax Directly in Node section. These are node-based examples, but they can be modified for browser use.

The MathJax Font Tools
MathJax needs to know a lot of information about each of the characters in the fonts that it uses, so MathJax has to provide the necessary font data; this font data is generated during the creation of the font npm packages and cannot be determined easily on the fly within a browser.

The tools for building the data needed by MathJax for your own font or font extension will be made available after version 4 is officially released. They were used to create these new fonts, but are not yet ready for public release, as they need cleaning up and documentation. But in the future, you will be able to generate an extension to an existing font (for example, to replace the letters and numbers with a different font while leaving all the rest of the characters unchanged), or produce a completely new font. So look for that functionality in the future.