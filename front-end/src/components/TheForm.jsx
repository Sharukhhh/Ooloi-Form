import React from 'react'
import {TextInput , DropdownSingle , CheckboxList, RadioList, DatePicker} from 'oolib'

const TheForm = ({formData}) => {

  return (
    <>
        {formData?.map((component) => {
            switch (component.comp) {
              case 'TextInput':
                return <TextInput key={component.props.id} {...component.props} />;
              case 'DropdownSingle':
                return <DropdownSingle key={component.props.id} {...component.props} />;
              case 'CheckboxList':
                return <CheckboxList key={component.props.id} {...component.props} />;
              case 'RadioList':
                return <RadioList key={component.props.id} {...component.props} />;
              case 'DatePicker':
                return <DatePicker key={component.props.id} {...component.props} />;
              default:
                return null;
            }
        })}
    </>
  )
}

export default TheForm