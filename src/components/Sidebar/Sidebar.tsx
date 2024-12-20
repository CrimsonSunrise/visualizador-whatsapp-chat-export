import { useRef, useEffect, useState, startTransition } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import Credits from '../Credits/Credits';
import FilterModeSelector from '../FilterModeSelector/FilterModeSelector';
import FilterMessageLimitsForm from '../FilterMessageLimitsForm/FilterMessageLimitsForm';
import FilterMessageDatesForm from '../FilterMessageDatesForm/FilterMessageDatesForm';
import ActiveUserSelector from '../ActiveUserSelector/ActiveUserSelector';

import * as S from './style';
import {
	activeUserAtom,
	isAnonymousAtom,
	isMenuOpenAtom,
	messagesDateBoundsAtom,
	participantsAtom
} from '../../stores/global';
import {
	datesAtom,
	globalFilterModeAtom,
	limitsAtom
} from '../../stores/filters';
import { FilterMode } from '../../types';

function Sidebar() {
	const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
	const [isAnonymous, setIsAnonymous] = useAtom(isAnonymousAtom);
	const [filterMode, setFilterMode] = useState<FilterMode>('índice');
	const setGlobalFilterMode = useSetAtom(globalFilterModeAtom);
	const [limits, setLimits] = useAtom(limitsAtom);
	const setDates = useSetAtom(datesAtom);
	const messagesDateBounds = useAtomValue(messagesDateBoundsAtom);
	const participants = useAtomValue(participantsAtom);
	const [activeUser, setActiveUser] = useAtom(activeUserAtom);

	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const openButtonRef = useRef<HTMLButtonElement>(null);

	const setMessageLimits = (e: React.FormEvent<HTMLFormElement>) => {
		const entries = Object.fromEntries(new FormData(e.currentTarget));

		e.preventDefault();
		setLimits({
			low: parseInt(entries.lowerLimit as string, 10),
			high: parseInt(entries.upperLimit as string, 10)
		});
		setGlobalFilterMode('índice');
	};

	const setMessagesByDate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDates({
			start: e.currentTarget.startDate.valueAsDate,
			end: e.currentTarget.endDate.valueAsDate
		});
		setGlobalFilterMode('data');
	};

	useEffect(() => {
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsMenuOpen(false);
		};

		document.addEventListener('keydown', keyDownHandler);
		return () => document.removeEventListener('keydown', keyDownHandler);
	}, [setIsMenuOpen]);

	useEffect(() => {
		if (isMenuOpen) closeButtonRef.current?.focus();
		else openButtonRef.current?.focus();
	}, [isMenuOpen]);

	return (
		<>
			<S.MenuOpenButton
				className="menu-open-button"
				type="button"
				onClick={() => setIsMenuOpen(true)}
				ref={openButtonRef}
			>
				Abrir menu
			</S.MenuOpenButton>
			<S.Overlay
				type="button"
				$isActive={isMenuOpen}
				onClick={() => setIsMenuOpen(false)}
				tabIndex={-1}
			/>
			<S.Sidebar $isOpen={isMenuOpen}>
				<S.MenuCloseButton
					type="button"
					onClick={() => setIsMenuOpen(false)}
					ref={closeButtonRef}
				>
					Fechar menu
				</S.MenuCloseButton>
				<S.SidebarContainer>
					<S.SidebarChildren>
						<FilterModeSelector
							filterMode={filterMode}
							setFilterMode={setFilterMode}
						/>
						{filterMode === 'índice' && (
							<FilterMessageLimitsForm
								limits={limits}
								setMessageLimits={setMessageLimits}
							/>
						)}
						{filterMode === 'data' && (
							<FilterMessageDatesForm
								messagesDateBounds={messagesDateBounds}
								setMessagesByDate={setMessagesByDate}
							/>
						)}
						<ActiveUserSelector
							participants={participants}
							activeUser={activeUser}
							setActiveUser={setActiveUser}
						/>

						<S.Field>
							<S.Label htmlFor="is-anonymous">
								Usuários anônimos
							</S.Label>
							<S.ToggleCheckbox
								id="is-anonymous"
								type="checkbox"
								checked={isAnonymous}
								onChange={() =>
									startTransition(() =>
										setIsAnonymous(bool => !bool)
									)
								}
							/>
						</S.Field>
					</S.SidebarChildren>
					<Credits />
				</S.SidebarContainer>
			</S.Sidebar>
		</>
	);
}

export default Sidebar;
