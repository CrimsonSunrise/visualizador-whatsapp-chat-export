import { DateBounds } from '../../types';
import { getISODateString } from '../../utils/utils';

import * as S from '../Sidebar/style';

interface IFilterMessageDatesForm {
	messagesDateBounds: DateBounds;
	setMessagesByDate: React.FormEventHandler<HTMLFormElement>;
}

function FilterMessageDatesForm({
	messagesDateBounds,
	setMessagesByDate
}: IFilterMessageDatesForm) {
	return (
		<S.Form onSubmit={setMessagesByDate}>
			<S.Fieldset>
				<legend>Período de mensagens</legend>
				<S.Field>
					<S.Label htmlFor="start-date">Início</S.Label>
					<S.Input
						id="start-date"
						name="startDate"
						type="date"
						min={getISODateString(messagesDateBounds.start)}
						max={getISODateString(messagesDateBounds.end)}
						defaultValue={getISODateString(
							messagesDateBounds.start
						)}
					/>
				</S.Field>
				<S.Field>
					<S.Label htmlFor="end-date">Fim</S.Label>
					<S.Input
						id="end-date"
						name="endDate"
						type="date"
						min={getISODateString(messagesDateBounds.start)}
						max={getISODateString(messagesDateBounds.end)}
						defaultValue={getISODateString(messagesDateBounds.end)}
					/>
				</S.Field>
				<S.Field>
					<S.Submit type="submit" value="Aplicar" />
					<S.InputDescription>
						Altere estes valores com precaução. Intervalos maiores
						podem travar a tela momentaneamente.
					</S.InputDescription>
				</S.Field>
			</S.Fieldset>
		</S.Form>
	);
}

export default FilterMessageDatesForm;
