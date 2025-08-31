import React from 'react';

function InstagramFeed() {
  const instagramFeedHtml = `<!-- LightWidget WIDGET --><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/5757dccd6e705198990c682846e98e6b.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>`;

  return (
    <div className="instagram-feed-container">
      <div dangerouslySetInnerHTML={{ __html: instagramFeedHtml }} />
    </div>
  );
}

export default InstagramFeed;