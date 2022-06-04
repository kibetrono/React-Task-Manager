import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const clickFunction=()=>{alert("Clicked")}

  return (
    <header className="header">
      <h1 className="headingH1">{title} </h1>
        <Button color='blue' text='Add' onClick={clickFunction}/>
    </header>
  )
}

Header.defaultProps={
    title:'Task Tracker',
    title2:'Task Tracker Two',
}

Header.propTypes={
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default Header
