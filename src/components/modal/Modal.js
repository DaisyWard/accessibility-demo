// https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible

import React, { useEffect } from 'react'
import './modal.css'

import { createPortal } from 'react-dom'
import usePortal from '../../hooks/usePortal'
import FocusTrap from 'focus-trap-react'

const Modal = ({
  id,
  closeModal
}) => {
  const target = usePortal(id)
  target.classList.add('modal-background')

  useEffect(() => {
    document.body.classList.add('noscroll')
    return () => document.body.classList.remove('noscroll')
  }, [])

  return (
    createPortal (
      <FocusTrap>
        <div role='dialog' aria-modal='true' aria-labelledby='dialog-title' describedby='dialog-desc'>
          <div className='modal-wrapper'>
            <p id='dialog-title' className='as-h1'>Terms and Conditions</p>
            <p id='dialog-desc'>Please fully read the following terms and conditions before proceeding</p>
            <button className='modal-close' aria-label='Close terms and conditions dialog' onClick={() => closeModal()}>X</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet venenatis sem, a hendrerit mi. Donec massa est, pretium sit amet velit in, tincidunt egestas risus. Praesent at turpis ac est vestibulum congue eget non mi. In accumsan tempus neque, vitae ultrices urna. Integer laoreet, dui a euismod dignissim, leo massa eleifend purus, tristique bibendum arcu magna sit amet quam. Nam enim lacus, viverra id felis ut, facilisis luctus libero. Praesent in scelerisque enim. Nulla nunc urna, pharetra sed imperdiet commodo, ultricies vel augue. Phasellus ipsum tortor, tincidunt vel elit id, finibus pellentesque turpis. Ut ex arcu, imperdiet ac bibendum at, volutpat vel urna. Suspendisse urna odio, vulputate vitae volutpat non, pellentesque vitae eros. Vestibulum id sem sapien. Donec justo nunc, maximus id quam id, posuere facilisis nisl. Donec bibendum gravida mi, vitae iaculis ante gravida vitae.</p>
            <p>Vivamus mattis ipsum vel sapien placerat posuere. Proin tincidunt et diam quis posuere. Integer feugiat cursus aliquet. Morbi ac euismod mauris. Nullam mi enim, posuere tincidunt pellentesque eget, tempor ut dolor. Donec felis velit, commodo sed bibendum ut, iaculis sed velit. Vivamus egestas purus nec congue aliquet. Nullam id tellus quis turpis feugiat suscipit sed ac turpis. Etiam id felis in ex mattis maximus. Cras nec efficitur dui.</p>
            <p>In vel egestas enim. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus gravida libero id orci sodales, nec suscipit est egestas. Donec pharetra mattis lorem, aliquam faucibus est imperdiet et. Nam in venenatis est, vel pretium risus. Sed pulvinar ligula quis orci interdum, eu volutpat quam tincidunt. Praesent eget lacus vitae elit consectetur blandit eu et sapien. Morbi in velit congue quam dictum luctus eu non ipsum.</p>
            <p>Fusce dignissim ornare cursus. Donec erat risus, scelerisque quis turpis eget, tristique tempor nisi. In sed porta justo. Phasellus eget pulvinar velit. Nulla vehicula nisi dolor, non laoreet nunc convallis a. In hendrerit ipsum eu tortor condimentum, et ultrices risus placerat. Integer quam erat, auctor sed metus vel, porttitor consequat lorem. Nam a est vel metus scelerisque placerat. Proin diam eros, dapibus at consectetur id, feugiat quis tortor. Etiam vitae dui vitae ipsum maximus viverra. Curabitur dui ipsum, bibendum sed rutrum aliquet, aliquam ac libero. Cras volutpat viverra quam in porta.</p>
            <p>Morbi aliquam neque nunc, vitae placerat purus pretium sed. Morbi metus ante, viverra ut consectetur in, vulputate ac sem. Nunc in dolor id erat porta vehicula sit amet in mauris. Etiam feugiat sit amet dolor ac gravida. Nulla ultricies enim vitae nibh sagittis sollicitudin. Vestibulum tristique tellus justo, ac egestas neque vestibulum ut. Nam at aliquet elit.</p>
            <div className='modal-buttons'>
              <button className='button modal-button-first' aria-label='Close terms and conditions dialog' onClick={() => closeModal()}>Close</button>
              <a className='link-as-button' href='/test'>Find out more</a>
            </div>
          </div>
        </div>
      </FocusTrap>,
      target
    )
  )
}

export default Modal