interface Props {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
    onClick?: () => void
}

export default function Button({ children, type = 'button', className='', disabled = false, onClick }: Props) {
    const defaultClassName = 'px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-800 transition'
    return (
        <button
            disabled={disabled}
            type={type}
            className={defaultClassName + ' ' + className}
            onClick={onClick}
        > {children} </button>
    )
}
