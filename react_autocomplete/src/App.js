import React, { useState } from 'react'
import Autocomplete from 'react-autocomplete'

function App() {

	const [value, setValue] = useState('');

	return (
		<div style={{
			display: 'flex', flexDirection: 'column',
			alignItems: 'center'
		}}>
			<div>
				{/* Inline css*/}
				<h4 style={{
					padding: '15px',
					border: '13px solid #b4f0b4',
					color: 'rgb(11, 167, 11)'
				}}>
					Mateshwari Assignment: React
					Autocomplete Component
				</h4>
			</div>
			<div>
				<Autocomplete

					// Items is the list of suggestions
					// displayed while the user type
					items={[
						{ label: 'C++' },
						{ label: 'C' },
						{ label: 'Python' },
						{ label: 'JavaScript' },
						{ label: 'Julia' },
						{ label: 'Java' },
						{ label: 'Objective C' },
						{ label: 'C#' },
						{ label: 'Dart' },
						{ label: 'Perl' }
					]}

					// To handle the case that when
					// the user type, suggested
					// values should be independent
					// of upper or lower case
					shouldItemRender={(item, value
						) => item.label.toLowerCase()
						.indexOf(value.toLowerCase()) > -1}
					getItemValue={item => item.label}
					renderItem={(item, isHighlighted) =>
						// Styling to highlight selected item
						<div style={{
							background: isHighlighted ?
								'#bcf5bc' : 'white'
						}}
							key={item.id}>
							{item.label}
						</div>
					}
					value={value}

					// The onChange event watches for
					// changes in an input field
					onChange={e => setValue(e.target.value)}

					// To set the state variable to value
					// selected from dropdown
					onSelect={(val) => setValue(val)}

					// Added style in Autocomplete component
					inputProps={{
						style: {
							width: '300px', height: '20px',
							background: '#e4f3f7',
							border: '2px outset lightgray'
						},
						placeholder: 'Search any Programming language'
					}}
				/>
			</div>
		</div>
	);
}

export default App;
