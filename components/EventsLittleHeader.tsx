const EventsLittleHeader: React.FC<ComponentWithChildrenAlone> = (props) => {

    return (
        <section className="w-full mb-8">
            <div className="w-[57%] h-[1px] bg-orange mb-3"></div>
            <div className="w-full px-5">
                { props.children }
            </div>
        </section>
    )
}

export default EventsLittleHeader