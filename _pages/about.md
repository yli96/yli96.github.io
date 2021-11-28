---
permalink: /
title: "Anthony Yuening Li's website"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Software Engineer at Google. I received my PhD in Department of Computer Science at the CSE department of **Texas A&M University**. I worked at the DATA Lab under the supervision of [Dr. Xia Hu](https://cs.rice.edu/~xh37/index.html) since 2017. Before joining TAMU, I received my B.S. degree in Computer Science from **Wuhan University** in 2017. My research interests focus on data mining and machine learning, with interests in anomaly detection, network embedding, and automated machine learning (AutoML).





Education
======
* B.S. in Computer Science, Wuhan University, 2017
* Ph.D. in Computer Science, Texas A&M University, 2021 

Work experience
======

* Spring 2022 - Now: Software Engineer, **Google**

* Summer 2021: Research Intern, **Google**

* Summer 2020: Research Intern, **Google**
  
* Spring 2020: Research Intern, **NEC Laboratories America**

* Fall 2015 - Fall 2021: Research Assistant, **Texas A&M University**


Service and leadership
======
* **Conference program committees**: KDD 2022, ICLR 2022, AAAI 2022, WSDM 2022, NeurIPS 2021, KDD 2021, CIKM 2021, AAAI 2021, NeurIPS 2020, AAAI 2020, ICBD 2020, KDD 2020, CIKM 2019
* **Journal reviewers**: IEEE Transactions on Neural Networks and Learning Systems, IEEE Intelligent Systems, ACM Transactions on Intelligent Systems and Technology, IEEE/CAA Journal of Automatica Sinica, Neurocomputing


Publications
======

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<ul>{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}</ul>
  
  

