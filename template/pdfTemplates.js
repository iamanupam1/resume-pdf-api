const PDF_TEMPLATES = {
  hero: "",
  default: `<!DOCTYPE html>
    <html>
    <title><%= contextData.pdfContent.header.name || 'Resume' ; %></title>
      <head>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font: 16px Helvetica, Sans-Serif;
            line-height: 24px;
          }
          .clear {
            clear: both;
          }
          #page-wrap {
            max-width: 800px;
            padding: 40px;
          }
          .themeColor{
            color: <%= contextData.pdfColor; %>
          }
          h1 {
            margin: 0 0 16px 0;
            padding: 0 0 16px 0;
            font-size: 42px;
            font-weight: bold;
            letter-spacing: -2px;
            border-bottom: 1px solid #999;
          }
          h2 {
            font-size: 20px;
            margin: 0 0 6px 0;
            position: relative;
          }
          h2 span {
            position: absolute;
            bottom: 0;
            right: 0;
            font-style: italic;
            font-family: Georgia, Serif;
            font-size: 16px;
            color: #999;
            font-weight: normal;
          }
          p {
            margin: 0 0 16px 0;
          }
          a {
            color: #999;
            text-decoration: none;
            border-bottom: 1px dotted #999;
          }
          a:hover {
            border-bottom-style: solid;
            color: black;
          }
          ul {
            margin: 0 0 32px 17px;
          }
          #objective {
            width: 100%;
            float: left;
          }
          #objective p {
            font-family: Georgia, Serif;
            font-style: italic;
            color: #666;
          }
          dt {
            font-style: italic;
            font-weight: bold;
            font-size: 18px;
            text-align: right;
            padding: 0 26px 0 0;
            width: 150px;
            float: left;
            height: 100px;
            border-right: 1px solid #999;
          }
          dd {
            width: 530px;
            float: right;
          }
          dd.clear {
            float: none;
            margin: 0;
            height: 15px;
          }
        </style>
      </head>
      <body>
        <div id="page-wrap">
          <div id="contact-info" class="vcard">
            <!-- Headers -->
    
            <h1 class="fn themeColor"><%= contextData.pdfContent.header.name; %></h1>
            <h2 class="fn"><%= contextData.pdfContent.header.position; %></h2>
    
            <p>
              Phone: <span class="tel"><%= contextData.pdfContent.header.phone; %></span><br />
              Website: <span class="tel"><%= contextData.pdfContent.header.website; %></span><br />
              Email:
              <a class="email" href=mailto:<%= contextData.pdfContent.header.email; %>"
                ><%= contextData.pdfContent.header.email; %></a
              >
            </p>
          </div>
    
          <!-- Objective Section -->
          <div id="objective">
            <p>
              <%= contextData.pdfContent.section.summary.description; %>
            </p>
          </div>
    
          <div class="clear"></div>
    
          <!-- All Sections -->
          <dl>
            <dd class="clear"></dd>
            <!-- Educatiion -->
            <dt class="themeColor">Education</dt>
            <dd>
              <% contextData.pdfContent.section.education.forEach(education => { %>
                <h2><%= education.insituteName %> <span><%= education.from %> - <%= education.to %></span></h2>
                <p><%= education.course %></p>
              <% }); %>
            </dd>
    
            <dd class="clear"></dd>
    
            <!-- Experience -->
            <dt class="themeColor">Experience</dt>
            <dd>
              <% contextData.pdfContent.section.experience.forEach(exp => { %>
                <h2>
                  <%= exp.position %>
                  <span><%= exp.from %> - <%= exp.to %></span>
                </h2>
                <h5><%= exp.company %></h5>
                <ul>
                  <% exp.description.forEach(desc => { %>
                    <li><%= desc %></li>
                  <% }); %>
                </ul>
              <% }); %>
            </dd>
    
            <dd class="clear"></dd>
    
            <!-- Skills -->
            <dt class="themeColor">Skills</dt>
            <dd>
              <ul>
                <% contextData.pdfContent.section.skills.forEach(skill => { %>
                  <li><%= skill %></li>
                <% }); %>
              </ul>
            </dd>
    
            <dd class="clear"></dd>
          </dl>
          <div class="clear"></div>
        </div>
      </body>
    </html>
    `,
};
module.exports = PDF_TEMPLATES;
