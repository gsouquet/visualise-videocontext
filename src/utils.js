export const createNode = (id, props) => ({
    data: { id },
    classes: props.type,
})

export const animateNodeChange = ele => {
    ele.stop(true, false)
    ele.style('background-blacken', -1)
    ele.animate({
        style: {
            'background-blacken': 0,
        },
        duration: 500,
    })
}

export default createNode
