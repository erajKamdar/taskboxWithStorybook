import React, { FC, useState } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { StarBorderRounded } from '@material-ui/icons'
import StarRoundedIcon from '@material-ui/icons/StarRounded';


interface TaskItemProps {
    pinned: boolean
    archived: boolean
    task: string
}

export const TaskItem: FC<TaskItemProps> = ({ task, pinned, archived }) => {
    const [pin, setPin] = useState(pinned)
    const [archive, setArchive] = useState(archived)

    return (
        <div>
            <div>
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={archive}
                        onChange={() => setArchive(!archive)}
                        name="archive"
                        color= 'secondary'
                        
                    />
                }
                label={task}
            />
                <FormControlLabel
                    control={<Checkbox color='default' icon={<StarBorderRounded  />} checked={pin} onChange={() => setPin(!pin)} checkedIcon={<StarRoundedIcon />} name='pinned'/>}
                    label=''
                />
            </div>
        </div>
    )
}
