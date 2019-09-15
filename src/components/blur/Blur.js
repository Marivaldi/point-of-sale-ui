import React from 'react';
export default function Blur(props) {
  if (props.visible) {
    return <div className="cover"/>
  }
  return null;
}