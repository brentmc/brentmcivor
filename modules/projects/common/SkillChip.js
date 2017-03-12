import React from 'react'

import { 
  Chip,
} from 'react-mdl';

const style = {
  margin:'5px',
}

const SkillChip = ({skill}) => {
	return (
		<Chip style={style}>
      {skill}
    </Chip>
	)
}

export default SkillChip