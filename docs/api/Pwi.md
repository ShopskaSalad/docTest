---
title: PWI
description: My document description
slug: pwi
hide_table_of_contents: false
---

PWI is a feature that payments can be done with MASTER, VISA, AMEX and TROY. <br/>
End-user may use previously stored cards in PWI, also the iyzico balance.<br/>
Further, PWI is one-step registration platform to make instant payments.<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2DStxmQAVZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Intro

PWI technically consists of 2(two) basic steps respectively;

- POST / PWI - Initialize
- POST / PWI - Retrieve

**PWI - Initialize** is where we start the payment process.<br/>
While **PWI - Retrieve** step is retrieving payment result, simply.

---
<!-- Line -->

## Product Flow

![product-flow](/img/test1.png)

In details;

1. **PWI - Initialize;** Merchant makes `POST/PWI-Initialize` request.
2. **Token + URL;** PayU iyzico responds with token&url.
3. **Renders URL;** Merchant renders given URL for checkout. 
4. **Redirects Callback;** Following up consumers' payment, PayU iyzico redirects to given `callbackUrl`.
5. **PWI - Retrieve;** Merchant makes `POST/PWI-Retrieve` request to confirm transaction.
6. **PWI - Retrieve Result;** Result.

To sum up, entire PWI integration can be summarize under 2(two) sequential POST requests.