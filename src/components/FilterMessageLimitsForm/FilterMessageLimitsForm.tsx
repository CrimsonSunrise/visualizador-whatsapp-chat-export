import * as S from '../Sidebar/style';

import { ILimits } from '../../types';

interface IFilterMessageLimitsForm {
	limits: ILimits;
	setMessageLimits: React.FormEventHandler<HTMLFormElement>;
}

function FilterMessageLimitsForm({
	limits,
	setMessageLimits
}: IFilterMessageLimitsForm) {
	return (
		<S.Form onSubmit={setMessageLimits}>
			<S.Fieldset>
				<legend>Limite de mensagens</legend>
				<S.Field>
					<S.Label htmlFor="lower-limit">Início</S.Label>
					<S.Input
						id="lower-limit"
						name="lowerLimit"
						type="number"
						min="1"
						placeholder={limits.low.toString()}
					/>
				</S.Field>
				<S.Field>
					<S.Label htmlFor="upper-limit">Fim</S.Label>
					<S.Input
						id="upper-limit"
						name="upperLimit"
						type="number"
						min="1"
						placeholder={limits.high.toString()}
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

export default FilterMessageLimitsForm;
