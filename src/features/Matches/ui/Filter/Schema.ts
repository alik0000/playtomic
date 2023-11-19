type Options = Record<string, string>

const SchemaSwitches: Options[] = [
    {
        id: 'switch-list-label-matches-level',
        title: 'Only matches of your level',
        ariaLabelledby: 'levelMatches'
    },
    {
        id: 'switch-list-label-full-matches',
        title: 'Full matches',
        ariaLabelledby: 'fullMatches'
    },
    {
        id: 'switch-list-label-playtomic-suggestions',
        title: 'Playtomic suggestions',
        ariaLabelledby: 'playtomicSuggestions'
    },
    {
        id: 'switch-list-label-playtomic-courts',
        title: 'Show only playtomic courts',
        ariaLabelledby: 'playtomicCourts'
    },
    {
        id: 'switch-list-label-unavailable-clubs',
        title: 'Show only unavailable-clubs',
        ariaLabelledby: 'unavailableClubs'
    }
]

const SchemaPLayCheckboxes: Options[] = [
    {
        id: 'checkbox-list-label-men-only',
        title: 'Men only',
        subtitle: 'Men-only match',
        ariaLabelledby: 'menOnly'
    },
    {
        id: 'checkbox-list-label-women',
        title: 'Women only',
        subtitle: 'Only women can join',
        ariaLabelledby: 'womenOnly'
    },
    {
        id: 'checkbox-list-label-mixed',
        title: 'Mixed',
        subtitle: 'A man and a woman on each team',
        ariaLabelledby: 'mixed'
    },
    {
        id: 'checkbox-list-label-all-players',
        title: 'All players',
        subtitle: 'All players can join',
        ariaLabelledby: 'allPlayers'
    },
]

const SchemaTypeCheckboxes: Options[] = [
    {
        id: 'checkbox-list-label-indoor',
        title: 'Indoor',
        ariaLabelledby: 'indoor'
    },
    {
        id: 'checkbox-list-label-outdoor',
        title: 'Outdoor',
        ariaLabelledby: 'outdoor'
    },
    {
        id: 'checkbox-list-label-roofed-outdoor',
        title: 'Roofed outdoor',
        ariaLabelledby: 'roofedOutdoor'
    }
]
const SchemaFeatureCheckboxes: Options[] = [
    {
        id: 'checkbox-list-label-wall',
        title: 'Wall',
        ariaLabelledby: 'wall'
    },
    {
        id: 'checkbox-list-label-crystal',
        title: 'Crystal',
        ariaLabelledby: 'crystal'
    },
    {
        id: 'checkbox-list-label-panoramic',
        title: 'Panoramic',
        ariaLabelledby: 'panoramic'
    }
]
const SchemaSizeCheckboxes: Options[] = [
    {
        id: 'checkbox-list-label-Single',
        title: 'Single',
        ariaLabelledby: 'single'
    },
    {
        id: 'checkbox-list-label-double',
        title: 'Double',
        ariaLabelledby: 'double'
    }
]

export { SchemaSwitches, SchemaFeatureCheckboxes, SchemaSizeCheckboxes, SchemaPLayCheckboxes, SchemaTypeCheckboxes }
