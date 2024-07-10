'use client'
import { useState } from 'react'
import './FAQS.css'

const FAQSItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <section className='faqs-page'>
      <div className='accordion-item'>
        <button className={`accordion-button ${isActive ? 'active' : ''}`} onClick={handleToggle}>
          {title}
        </button>
        <div className='accordion-content' style={{ maxHeight: isActive ? '200px' : '0' }}>
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

const FAQS = () => {
  const items = [
    {
      title: 'What Does Royalty Free Mean?',
      content: "Royalty free means you don't have to pay royalties each time you use the image."
    },
    {
      title: 'How Can I Use These Images?',
      content: "You can use these images for personal and commercial projects without additional fees."
    },
    {
      title: 'Are There Any Restrictions?',
      content: "There are no major restrictions, but it's good to check the licensing terms."
    },
    {
      title: 'Can I Modify the Images?',
      content: "Yes, you can modify the images to fit your needs."
    },
    {
      title: 'Do I Need to Credit the Author?',
      content: "It's not required but appreciated if you do."
    },
    {
      title: 'Can I Share These Images?',
      content: "Yes, you can share them as long as you follow the licensing terms."
    },
    {
      title: 'What Formats Are Available?',
      content: "Images are available in various formats such as JPG, PNG, and SVG."
    },
    {
      title: 'How Can I Download the Images?',
      content: "You can download images directly from the website after selecting them."
    }
  ]

  return (
    <div className='accordion-container'>
      <div className='accordion'>
        {items.slice(0, 4).map((item, index) => (
          <FAQSItem key={index} title={item.title} content={item.content} />
        ))}
        <div className='faq-image'>
        <img src="/public/imges/Frame 114.png" alt="" />
      </div>
      </div>
      <div className='accordion'>
        {items.slice(4).map((item, index) => (
          <FAQSItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  )

}

export default FAQS
