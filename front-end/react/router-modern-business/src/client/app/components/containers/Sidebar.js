import React from 'react'

const Sidebar = () => (
  <div className="container">

    <h1 className="mt-4 mb-3">Sidebar Page
      <small>Subheading</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">About</li>
    </ol>

    <div className="row">

      <div className="col-lg-3 mb-4">
        <div className="list-group">
          <a href="index.html" className="list-group-item">Home</a>
          <a href="about.html" className="list-group-item">About</a>
          <a href="services.html" className="list-group-item">Services</a>
          <a href="contact.html" className="list-group-item">Contact</a>
          <a href="portfolio-1-col.html" className="list-group-item">1 Column Portfolio</a>
          <a href="portfolio-2-col.html" className="list-group-item">2 Column Portfolio</a>
          <a href="portfolio-3-col.html" className="list-group-item">3 Column Portfolio</a>
          <a href="portfolio-4-col.html" className="list-group-item">4 Column Portfolio</a>
          <a href="portfolio-item.html" className="list-group-item">Single Portfolio Item</a>
          <a href="blog-home-1.html" className="list-group-item">Blog Home 1</a>
          <a href="blog-home-2.html" className="list-group-item">Blog Home 2</a>
          <a href="blog-post.html" className="list-group-item">Blog Post</a>
          <a href="full-width.html" className="list-group-item">Full Width Page</a>
          <a href="sidebar.html" className="list-group-item active">Sidebar Page</a>
          <a href="faq.html" className="list-group-item">FAQ</a>
          <a href="404.html" className="list-group-item">404</a>
          <a href="pricing.html" className="list-group-item">Pricing Table</a>
        </div>
      </div>

      <div className="col-lg-9 mb-4">
        <h2>Section Heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, et temporibus, facere perferendis veniam beatae non debitis, numquam blanditiis necessitatibus vel mollitia dolorum laudantium, voluptate dolores iure maxime ducimus fugit.</p>
      </div>
    </div>
  </div>
)

export default Sidebar
