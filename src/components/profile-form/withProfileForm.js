import * as React from 'react'

export function withProfileForm (WrappedComponent) {

    return class extends React.Component {

        constructor (props) {
            super(props)
            this.state = {
                name: props.name,
                email: props.email,
                day: props.day,
                month: props.month,
                year: props.year,
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChange (event) {
            if (event.target && typeof event.target.id === 'string') {
                this.setState({
                    [event.target.id]: event.target.value
                })
            }
        }

        handleSubmit (event) {
            event.preventDefault()
            this.props.submitForm(this.state)
        }

        render () {
            return <WrappedComponent
                { ...this.state }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit }
            />
        }

    }
}
