'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
    className?: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart, className }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Initialize mermaid with configuration
        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            themeVariables: {
                primaryColor: '#3b82f6',
                primaryTextColor: '#fff',
                primaryBorderColor: '#60a5fa',
                lineColor: '#94a3b8',
                secondaryColor: '#1e293b',
                tertiaryColor: '#0f172a',
                background: '#0f172a',
                mainBkg: '#1e293b',
                secondBkg: '#334155',
                mainContrastColor: '#f1f5f9',
                darkMode: true,
                fontSize: '16px',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            },
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            }
        });

        const renderDiagram = async () => {
            if (!chart) return;

            try {
                // Generate a unique ID for this diagram
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                
                // Render the diagram
                const { svg: renderedSvg } = await mermaid.render(id, chart);
                setSvg(renderedSvg);
                setError(null);
            } catch (err) {
                console.error('Mermaid rendering error:', err);
                setError(err instanceof Error ? err.message : 'Failed to render diagram');
            }
        };

        renderDiagram();
    }, [chart]);

    if (error) {
        return (
            <div 
                className={className}
                style={{
                    padding: '1rem',
                    border: '1px solid #ef4444',
                    borderRadius: '0.5rem',
                    backgroundColor: '#1e293b',
                    color: '#ef4444',
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem'
                }}
            >
                <strong>Mermaid Error:</strong> {error}
            </div>
        );
    }

    return (
        <div 
            ref={elementRef}
            className={className}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                overflow: 'auto'
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

export default Mermaid;

