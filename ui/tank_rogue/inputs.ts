import { RogueRune } from 'ui/core/proto/rogue.js';

import * as InputHelpers from '../core/components/input_helpers.js';
import { Player } from '../core/player.js';
import { ItemSlot, Spec } from '../core/proto/common.js';


// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.

export const HonorOfThievesCritRate = InputHelpers.makeSpecOptionsNumberInput<Spec.SpecRogue>({
	fieldName: 'honorAmongThievesCritRate',
	label: 'Honor Among Thieves Crit Rate',
	labelTooltip: 'Number of crits other group members generate within 100 seconds',
	showWhen: (player: Player<Spec.SpecRogue>) => player.getEquippedItem(ItemSlot.ItemSlotHead)?.rune?.id == RogueRune.RuneHonorAmongThieves,
});