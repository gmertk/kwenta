import styled from 'styled-components';

import KwentaLogo from 'assets/svg/earn/KWENTA.svg';
import Button from 'components/Button';
import Text from 'components/Text';
import media from 'styles/media';

export const BigText: React.FC<{ hasKwentaLogo?: boolean }> = ({
	children,
	hasKwentaLogo,
	...rest
}) => (
	<div style={{ display: 'flex', alignItems: 'center' }}>
		<BigTextRaw {...rest}>{children}</BigTextRaw>
		{hasKwentaLogo && <StyledKwentaLogo />}
	</div>
);

export const BigTextRaw = styled(Text.Heading)<{ $yellow?: boolean }>`
	font-size: 25px;
	font-family: AkkuratMonoLLWeb-Regular;
	letter-spacing: -0.7px;
	color: ${(props) => props.theme.colors.selectedTheme.yellow};
`;

export const Title = styled(Text.Body)`
	color: ${(props) => props.theme.colors.selectedTheme.gray};
	font-size: 14px;
	margin-bottom: 5px;
`;

export const Description = styled(Text.Body)`
	font-size: 15px;
	color: ${(props) => props.theme.colors.selectedTheme.gray};
	margin: 8px 0;
`;

const StyledKwentaLogo = styled(KwentaLogo)`
	margin-left: 8px;
`;

export const StyledBody = styled(Text.Body)`
	color: ${(props) => props.theme.colors.selectedTheme.gray};
	margin-bottom: 40px;
`;

export const StyledButton = styled(Button)`
	font-size: 13px;
	height: 38px;
`;

export const DollarValue = styled(BigText)`
	color: ${(props) => props.theme.colors.selectedTheme.gray};
	margin-left: 8px;
`;

export const GridContainer = styled.div`
	display: flex;

	${media.greaterThan('mdUp')`
		flex-wrap: wrap;
		border-radius: 15px;
		border: ${(props) => props.theme.colors.selectedTheme.border};
		overflow: hidden;
		background-color: ${(props) => props.theme.colors.selectedTheme.segmented.button.background};

		& > div {
			box-sizing: border-box;
			border-left: ${(props) => props.theme.colors.selectedTheme.border};
			border-right: ${(props) => props.theme.colors.selectedTheme.border};
			min-width: 50%;

			&:nth-child(2n), &:nth-child(2n+2) {
				border-right: none;
			}

			&:nth-child(3) {
				border-bottom: none;
			}

			&:first-child,
			&:last-child {
				border-left: none;
				border-right: none;
			}
		}
	`}

	${media.lessThan('mdUp')`
		flex-direction: column;
	`}
`;

export const LiquidityAmount = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 3px;
`;

export const Heading = styled(Text.Heading).attrs({ variant: 'h4' })`
	font-family: ${(props) => props.theme.fonts.bold};
	font-size: 21px;
	margin-bottom: 4px;
	text-transform: uppercase;
	font-variant: all-small-caps;
	color: ${(props) => props.theme.colors.selectedTheme.yellow};
`;
