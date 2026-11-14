import {useState, MouseEvent} from "react";

export type FilterValueType = 'all' | 'active' | 'completed'

type PropsType = {
    filterValue: FilterValueType
    onFilterChange: (filterValue: FilterValueType) => void
}

export function TodolistFilter(props: PropsType) {

    // UI
    const handleAllClick = () => props.onFilterChange('all')
    const handleActiveClick = () => props.onFilterChange('active')
    const handleCompletedClick = () => props.onFilterChange('completed')

     const handleAnyButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onFilterChange(e.currentTarget.dataset.filterValue as FilterValueType)
     }

    const selectedButtonStyle = {border: "4px solid black"}


    return <div>
        <input placeholder="Search by title"/>
        <button data-filter-value={'all'} style={props.filterValue === 'all' ? selectedButtonStyle : {}}
                onClick={handleAllClick}>All
        </button>
        <button data-filter-value={'active'} style={props.filterValue === 'active' ? selectedButtonStyle : {}}
                onClick={handleActiveClick}>Active
        </button>
        <button data-filter-value={'completed'} style={props.filterValue === 'completed' ? selectedButtonStyle : {}}
                onClick={handleCompletedClick}>Completed
        </button>
    </div>
}
