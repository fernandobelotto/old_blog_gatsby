import { Button, useColorMode } from '@chakra-ui/react';
import {
    KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useDeepMatches
} from 'kbar';
import * as React from 'react';

// TODO: implement command bar
export default function CommandBar(props) {

    const { colorMode, setColorMode, toggleColorMode } = useColorMode();

    const actions = [
        {
            id: 'dark',
            name: 'Toggle dark / light mode',
            shortcut: ['u'],
            keywords: 'toggle-mode',
            section: 'General',
            perform: () => { setColorMode('light'); console.log('colorMode', colorMode) },
            icon: <i className='ri-file-copy-line' style={iconStyle} />,
        },
        {
            id: 'diferente',
            name: 'outra action',
            shortcut: ['u'],
            keywords: 'change-something',
            section: 'General',
            perform: () => { toggleColorMode('dark'); console.log('color', colorMode) },
            icon: <i className='ri-file-copy-line' style={iconStyle} />,
        },
    ]

    return <KBarProvider actions={actions}>
        <KBarPortal>
            <KBarPositioner style={positionerStyle}>
                <KBarAnimator className="kbar-blur" style={animatorStyle}>
                    <KBarSearch style={searchStyle} placeholder='Type a command or search…' />
                    <Button onClick={() => toggleColorMode()}>TEste</Button>
                    <RenderResults />
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>

        {props.children}

    </KBarProvider>
}

function RenderResults() {
    const { results } = useDeepMatches()

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === 'string' ? (
                    <div style={groupNameStyle}>{item}</div>
                ) : (
                    <ResultItem action={item} active={active} />
                )
            }
        />
    )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
    return (
        <div ref={ref} style={getResultStyle(active)}>
            <div style={actionStyle}>
                {action.icon && action.icon}
                <div style={actionRowStyle}>
                    <span>{action.name}</span>
                </div>
            </div>
            {action.shortcut?.length ? (
                <div aria-hidden style={shortcutStyle}>
                    {action.shortcut.map((shortcut) => (
                        <kbd key={shortcut} style={kbdStyle}>
                            {shortcut}
                        </kbd>
                    ))}
                </div>
            ) : null}
        </div>
    )
})

const positionerStyle = {
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    inset: '0px',
    padding: '14vh 16px 16px',
    background: 'rgba(0, 0, 0, .7)',
    boxSizing: 'border-box',
}

const animatorStyle = {
    maxWidth: '600px',
    width: '100%',
    color: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
}

const searchStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    margin: 0,
    background: 'rgb(0, 0, 0)',
    color: 'white',
}

const groupNameStyle = {
    padding: '8px 16px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: 'rgb(0, 0, 0)',
}

const iconStyle = {
    fontSize: '20px',
    position: 'relative',
    top: '-2px',
}

const kbdStyle = {
    padding: '4px 8px',
    textTransform: 'uppercase',
    color: 'var(--secondaryColor)',
    background: 'rgba(255, 255, 255, .1)',
}

const shortcutStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '4px'
}

const actionStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
}

const actionRowStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const getResultStyle = (active) => {
    return {
        padding: '12px 16px',
        background: active ? 'rgb(119, 13, 13)' : 'rgb(0, 0, 0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        cursor: 'pointer',
        color: active ? 'white' : 'var(--secondaryColor)',
    }
}