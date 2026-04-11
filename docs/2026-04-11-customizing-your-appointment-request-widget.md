---
title: "Customizing your appointment request widget"
author: "Jasmine"
date: 2026-04-11
source: https://support.simplepractice.com/hc/en-us/articles/41956916333325-Customizing-your-appointment-request-widget
site: "SimplePractice Support"
---

# Customizing your appointment request widget

> You can customize the appointment request widget button to better match your website’s design. The steps below involve editing HTML and CSS and are best suited for users who are comfortable working...

**Author:** Jasmine  
**Published:** 2026-04-11  
**Source:** [Original Article](https://support.simplepractice.com/hc/en-us/articles/41956916333325-Customizing-your-appointment-request-widget) — *SimplePractice Support*

---

![](https://support.simplepractice.com/system/photos/361103001971/profile_image_417300723732_213295.jpg)

                        
                    
                    
                      
                        Updated 3 months ago

                      
                      
                    
                  
          

          
            You can customize the appointment request widget button to better match your website’s design. The steps below involve editing HTML and CSS and are best suited for users who are comfortable working with website editors.

**Note:** To preview your appointment widget, see [**Previewing the appointment request widget**](https://support.simplepractice.com/hc/en-us/articles/41956868349581).

The most common customization is matching the widget button to your website’s existing button styles. To do this:

1. Right-click an existing button on your website and select **Inspect** or **Inspect Element**

![Inspecting a button using browser developer tools](https://support.simplepractice.com/hc/article_attachments/41956913934093)

1. Copy the value inside the button’s **class** attribute

![Copying CSS classes from the class attribute](https://support.simplepractice.com/hc/article_attachments/41956916331405)

1. Locate the appointment request widget code on your website
2. Replace the **spwidget-button** class with the copied class values

![Replacing the spwidget-button class in the widget code](https://support.simplepractice.com/hc/article_attachments/41956913937805)

1. Remove unnecessary elements (such as extra `style` or `div` tags), leaving only the button, `a` tag, and `script` tag

![Simplified appointment request widget code](https://support.simplepractice.com/hc/article_attachments/41956916332173)

Your widget button should now match your existing site styles. You can also change the default button text from **Request Appointment** to any wording you prefer.

This is a general guide, and results may vary depending on your website’s structure and styling.

          
          
            
              
#### Related to

              
- [widget](https://support.simplepractice.com/hc/en-us/search?content_tags=01KCA3XMJE4BA75JKFFKH2TM5Y&utf8=%E2%9C%93)
