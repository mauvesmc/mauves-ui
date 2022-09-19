<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Group from '../../components/Group.svelte';

  import Time from '../../components/Time.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  import Stack from '../../components/Stack.svelte';
</script>

<StoryWrapper>
  <Variant name="В реальном времени" description="Обновляется все время">
    <Stack>
      <Time live />
      <Time live let:final>
        {`${final.getHours().toString().padStart(2, '0')}:${final
          .getMinutes()
          .toString()
          .padStart(2, '0')}:${final
          .getSeconds()
          .toString()
          .padStart(2, '0')} ${final
          .getDate()
          .toString()
          .padStart(2, '0')}.${final
          .getMonth()
          .toString()
          .padStart(2, '0')}.${final
          .getFullYear()
          .toString()
          .substring(2)
          .padEnd(2, '0')}`}
      </Time>
    </Stack>
  </Variant>
  <Variant name="±1 секунду">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 1000)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 1000)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±5 секунду">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 5000)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 5000)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±1 минуту">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 1000 * 60)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 1000 * 60)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±1 час">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 1000 * 60 * 60)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 1000 * 60 * 60)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 дня">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±6 месяцев">
    <Group>
      <Time
        date={new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 6)}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 6)}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года в секундах">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="second"
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="second"
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года в минутах">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="minute"
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="minute"
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года в часах">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="hour"
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="hour"
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года в дней">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="day"
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="day"
        relative
      />
    </Group>
  </Variant>
  <Variant name="±2 года в месяцев">
    <Group>
      <Time
        date={new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="month"
        relative
      />
      <Time
        date={new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 2,
        )}
        updateTime={0}
        forceRelativeUnit="month"
        relative
      />
    </Group>
  </Variant>
  <Variant name="В отношении" description="Дата 12.07.2022">
    <Time date={new Date(2022, 7, 12)} relative />
  </Variant>
</StoryWrapper>
