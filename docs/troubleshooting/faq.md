---
title: Frequently Asked Questions
sidebar_label: FAQ
---

### Who makes Blazar?
Blazar is maintained by TimelyStream, Inc. along with [many other contributors](https://github.com/timelystream/blazar/graphs/contributors) from all over the world.

### Why call it Blazar?
Blazar flares are extremely dense sources of highly variable energy, supermassive black holes in the center of the main galaxy, sucking in matter to eject energetic particles. The accretion disk of a flare is like our physical and chemical view, the sucked-in matter is like streaming data, and the ejected energetic particles are the result of our low-latency query returns.

### Where do I find the Blazar Logo?
You can download the Blazar Logo here: <br/> • Web: [png](/images/logo-dl/blazar-logo.png) / [jpg](/images/logo-dl/blazar-logo.jpg) <br/>  • Print: [svg](/images/logo-dl/blazar_Logo.svg) / [pdf](/images/logo-dl/blazar-Logo.pdf) <br/>

### How can I expand the Blazar website?
The Blazar Website is hosted by GitHub pages, its repository is [here](
https://github.com/timelystream/timelystream-web). Pull requests to fix issues or generally expand the documentation section are very welcome.

### I benchmarked Blazar and its slower than \[some other system\]
In a departure from traditional academic systems research practise, we have at first focused our attention on correctness, not raw performance. So it is entirely possible Blazar is slower than some other, more mature system at this point. That being said, we are now confident Blazar produces correct query results, and are actively working to make it fast, too. So publishing benchmark numbers from the current preview releases is certainly interesting, but should not be taken as the definitive results on what the Blazar architecture can or cannot do.

### Does Blazar use SIMD
Blazar does not use *explicit SIMD* instructions because they greatly complicate portability and compilation. Instead, Blazar uses *implicit SIMD*, where we go to great lengths to write our C++ code in such a way that the compiler can *auto-generate SIMD instructions* for the specific hardware. As an example why this is a good idea, porting Blazar to the new Apple M1 architecture took 10 minutes.


